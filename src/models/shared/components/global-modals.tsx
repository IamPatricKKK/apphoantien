"use client";

import { ConfigModal } from "@/models/affiliate-shared/components/config-modal";
import { CreateLinkModal } from "@/models/affiliate-shared/components/create-link-modal";
import { useAffiliateDashboard } from "@/models/affiliate-shared/hooks/use-affiliate-dashboard";
import type { ReactNode } from "react";

type SharedPageProps = {
  currentPath: string;
  children: (actions: {
    openCreate: () => void;
    openConfig: () => void;
    createLinkSection: ReactNode;
  }) => ReactNode;
  Shell: React.ComponentType<{
    currentPath: string;
    onOpenConfig: () => void;
    children: ReactNode;
  }>;
};

export function SharedPageWithModals({ currentPath, children, Shell }: SharedPageProps) {
  const { state, actions } = useAffiliateDashboard();
  const focusCreateSection = () => {
    if (typeof document === "undefined") {
      return;
    }

    document.getElementById("affiliate-create-section")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    document.getElementById("affiliate-product-link-input")?.focus();
  };

  const createLinkSection = (
    <CreateLinkModal
      hasGeneratedLink={state.hasGeneratedLink}
      shopeeLink={state.shopeeLink}
      subId={state.subId}
      loading={state.loading}
      error={state.error}
      statusMessage={state.statusMessage}
      affiliateLink={state.affiliateLink}
      encodedProductUrl={state.encodedProductUrl}
      generatedSubId={state.generatedSubId}
      productName={state.productName}
      commissionRate={state.commissionRate}
      onChangeLink={actions.setShopeeLink}
      onChangeSubId={actions.setSubId}
      onSubmit={actions.handleCreateLink}
      onPaste={() => void actions.pasteFromClipboard()}
      onCopy={() => void actions.copyText(state.affiliateLink, "Da sao chep link hoan tien.")}
    />
  );

  return (
    <>
      <Shell currentPath={currentPath} onOpenConfig={() => actions.setIsConfigModalOpen(true)}>
        {children({
          openCreate: focusCreateSection,
          openConfig: () => actions.setIsConfigModalOpen(true),
          createLinkSection,
        })}
      </Shell>

      <ConfigModal
        isOpen={state.isConfigModalOpen}
        curlText={state.curlText}
        configStatus={state.configStatus}
        savingCurl={state.savingCurl}
        onChangeCurl={actions.setCurlText}
        onClose={() => actions.setIsConfigModalOpen(false)}
        onSubmit={actions.handleSaveCurl}
      />
    </>
  );
}
