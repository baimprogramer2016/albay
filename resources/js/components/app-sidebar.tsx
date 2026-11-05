import { Link } from "@inertiajs/react";
import {
    BookOpen,
    Database,
    FileChartColumn,
    FolderGit2,
    LayoutGrid,
    ListOrdered,
    Settings,
    ShoppingCart,
    Users,
    Warehouse,
} from "lucide-react";
import AppLogo from "@/components/app-logo";
import { NavFooter } from "@/components/nav-footer";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { dashboard } from "@/routes";
import type { NavItem } from "@/types";
import {
    LayoutDashboard,
    ShoppingBasket,
    Package,
    Wallet,
    ChartNoAxesCombined,
    Receipt,
    History,
    Boxes,
    FileText,
    Calculator,
    ShieldCheck,
    Printer,
    ArrowLeftRight,
} from "lucide-react";

export const mainNavItems = [
    {
        title: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
    },
    {
        title: "Master Data",
        icon: Database,
        href: "#",
        items: [
            { title: "Produk / Barang", href: "/master/produk" },
            { title: "Kategori Produk", href: "/master/kategori" },
            { title: "Satuan & Barcode", href: "/master/satuan-barcode" },
            { title: "Manajemen Harga", href: "/master/harga" },
            { title: "Pelanggan (Member)", href: "/master/pelanggan" },
            { title: "Supplier", href: "/master/supplier" },
            { title: "Gudang / Cabang", href: "/master/lokasi" },
            { title: "Metode Pembayaran", href: "/master/pembayaran" },
        ],
    },
    {
        title: "Penjualan (POS)",
        icon: ShoppingCart,
        href: "#",
        items: [
            { title: "Transaksi Kasir", href: "/penjualan/kasir" },
            { title: "Riwayat Transaksi", href: "/penjualan/riwayat" },
            { title: "Retur Penjualan", href: "/penjualan/retur" },
            { title: "Paket Bundling", href: "/penjualan/bundling" },
            { title: "Promo & Diskon", href: "/penjualan/promo" },
        ],
    },
    {
        title: "Pembelian",
        icon: ShoppingBasket,
        href: "#",
        items: [
            { title: "Purchase Order (PO)", href: "/pembelian/po" },
            { title: "Penerimaan Barang", href: "/pembelian/penerimaan" },
            { title: "Tagihan Pembelian", href: "/pembelian/tagihan" },
            { title: "Pembayaran Supplier", href: "/pembelian/pembayaran" },
            { title: "Retur Pembelian", href: "/pembelian/retur" },
            { title: "Utang Supplier", href: "/pembelian/utang" },
        ],
    },
    {
        title: "Inventory / Persediaan",
        icon: Package,
        href: "#",
        items: [
            { title: "Status Persediaan", href: "/inventory/persediaan" },
            { title: "Mutasi Stok", href: "/inventory/mutasi" },
            { title: "Kartu Stok", href: "/inventory/kartu-stok" },
            { title: "Stock Opname", href: "/inventory/stock-opname" },
            { title: "Transfer Antar Gudang", href: "/inventory/transfer" },
        ],
    },
    {
        title: "Kas & Keuangan",
        icon: Wallet,
        href: "#",
        items: [
            { title: "Buka / Tutup Kasir", href: "/keuangan/shift-kasir" },
            { title: "Kas & Bank", href: "/keuangan/kas-bank" },
            { title: "Penerimaan Kas", href: "/keuangan/penerimaan" },
            { title: "Pengeluaran Kas", href: "/keuangan/pengeluaran" },
            { title: "Pembayaran Hutang", href: "/keuangan/hutang" },
            { title: "Penerimaan Piutang", href: "/keuangan/piutang" },
        ],
    },
    {
        title: "Akuntansi",
        icon: BookOpen,
        href: "#",
        items: [
            { title: "Chart of Accounts", href: "/akuntansi/coa" },
            { title: "Jurnal Umum", href: "/akuntansi/jurnal" },
            { title: "Buku Besar", href: "/akuntansi/buku-besar" },
            { title: "Neraca Saldo", href: "/akuntansi/neraca-saldo" },
            { title: "Tutup Buku", href: "/akuntansi/tutup-buku" },
        ],
    },
    {
        title: "Laporan",
        icon: ChartNoAxesCombined,
        href: "#",
        items: [
            { title: "Penjualan", href: "/laporan/penjualan" },
            { title: "Produk Terlaris", href: "/laporan/produk-terlaris" },
            { title: "Pembelian", href: "/laporan/pembelian" },
            { title: "Stok/Persediaan", href: "/laporan/stok" },
            {
                title: "Hutang & Piutang",
                href: "/laporan/hutang-piutang",
            },
            { title: "Laba Rugi", href: "/laporan/laba-rugi" },
            { title: "Neraca & Arus Kas", href: "/laporan/neraca-arus-kas" },
        ],
    },
    {
        title: "Pengaturan Sistem",
        icon: Settings,
        href: "#",
        items: [
            { title: "Metode HPP", href: "/pengaturan/methode-hpp" },
            { title: "Profil Toko & Pajak", href: "/pengaturan/profil" },
            { title: "Logo & Format Struk", href: "/pengaturan/struk" },
            { title: "Manajemen Pengguna", href: "/pengaturan/pengguna" },
            { title: "Role & Hak Akses", href: "/pengaturan/role" },
            { title: "Perangkat & Printer", href: "/pengaturan/perangkat" },
            { title: "Audit Log & Keamanan", href: "/pengaturan/audit-log" },
            { title: "Backup & Restore Data", href: "/pengaturan/backup" },
        ],
    },
];
const footerNavItems: NavItem[] = [
    {
        title: "Repository",
        href: "https://github.com/laravel/react-starter-kit",
        icon: FolderGit2,
    },
    {
        title: "Documentation",
        href: "https://laravel.com/docs/starter-kits#react",
        icon: BookOpen,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                {/* <NavFooter items={footerNavItems} className="mt-auto" /> */}
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
