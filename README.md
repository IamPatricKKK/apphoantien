# Shopee Affiliate Link Generator

Cong cu nay tao link Shopee Affiliate ngay tren frontend theo cong thuc:

```text
https://s.shopee.vn/an_redir?origin_link=<encodedProductUrl>&affiliate_id=17348660462&sub_id=<subId>
```

`affiliate_id` dang duoc co dinh la `17348660462`.

## Cach chay

```bash
yarn install
yarn dev
```

Mo `http://localhost:3000`.

## Chuc nang da lam

- Nhap link san pham Shopee goc
- Nhap `sub_id`
- Tu dong encode `origin_link`
- Tao link affiliate ngay tren frontend
- Neu `sub_id` rong thi tu dong gan `default`
- Hien thi link ket qua de copy
- Co validate:
  - thieu link => bao loi
  - link khong thuoc `shopee.vn` => bao loi

## Vi du test

Input:

```text
Link san pham:
https://shopee.vn/S%E1%BB%AFa-ch%E1%BB%91ng-n%E1%BA%AFng-d%C6%B0%E1%BB%A1ng-da-Shiseido-GSC-Perfect-Sun-Protector-Lotion-SPF50-50ml-i.392896126.29179620490

sub_id:
tiktok01
```

Ket qua mong doi:

```text
https://s.shopee.vn/an_redir?origin_link=https%3A%2F%2Fshopee.vn%2FS%25E1%25BB%25AFa-ch%25E1%25BB%2591ng-n%25E1%25BA%25AFng-d%25C6%25B0%25E1%25BB%25A1ng-da-Shiseido-GSC-Perfect-Sun-Protector-Lotion-SPF50-50ml-i.392896126.29179620490&affiliate_id=17348660462&sub_id=tiktok01
```

Neu bo trong `sub_id`, ket qua se dung:

```text
sub_id=default
```
