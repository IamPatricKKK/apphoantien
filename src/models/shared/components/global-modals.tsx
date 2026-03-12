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
  }) => ReactNode;
  Shell: React.ComponentType<{
    currentPath: string;
    onOpenConfig: () => void;
    children: ReactNode;
  }>;
};

export function SharedPageWithModals({ currentPath, children, Shell }: SharedPageProps) {
  const { state, actions } = useAffiliateDashboard();

  return (
    <>
      <Shell currentPath={currentPath} onOpenConfig={() => actions.setIsConfigModalOpen(true)}>
        {children({
          openCreate: () => actions.setIsCreateModalOpen(true),
          openConfig: () => actions.setIsConfigModalOpen(true),
        })}
      </Shell>

      <CreateLinkModal
        isOpen={state.isCreateModalOpen}
        hasGeneratedLink={state.hasGeneratedLink}
        shopeeLink={state.shopeeLink}
        loading={state.loading}
        error={state.error}
        statusMessage={state.statusMessage}
        affiliateLink={state.affiliateLink}
        productName={state.productName}
        commissionRate={state.commissionRate}
        onClose={() => actions.setIsCreateModalOpen(false)}
        onChangeLink={actions.setShopeeLink}
        onSubmit={actions.handleCreateLink}
        onPaste={() => void actions.pasteFromClipboard()}
        onCopy={() => void actions.copyText(state.affiliateLink, "Da sao chep link hoan tien.")}
      />

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
