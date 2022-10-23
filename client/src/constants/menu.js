import {
  BsBagPlus,
  BsBagX,
  BsBox,
  BsCartPlus,
  BsCircle,
  BsGraphUp,
  BsPeople,
  BsEnvelope,
} from "react-icons/bs";
import { RiDashboardLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { MdPassword, MdOutlineBackup } from "react-icons/md";
import {
  AiOutlineUser,
  AiOutlineBank,
  AiOutlineSetting,
  AiOutlineUserAdd,
} from "react-icons/ai";

const MENU_ITEMS = [
  { key: "navigation", label: "Navigation", isTitle: true },
  {
    key: "Dashboard",
    label: "Dashboard",
    url: "/dashboard",
    isTitle: false,
    icon: <RiDashboardLine className="side-bar-item-icon" />,
  },
  {
    key: "Customer",
    label: "Customer",
    isTitle: false,
    icon: <BsPeople className="side-bar-item-icon" />,
    children: [
      {
        key: "NewCustomer",
        label: "New Customer",
        url: "/new-customer",
        parentKey: "Customer",
        icon: <AiOutlineUserAdd size={16} className="side-bar-subitem-icon" />,
      },
      {
        key: "CustomerList",
        label: "Customer List",
        url: "/customer-list",
        parentKey: "Customer",
        icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
      },
    ],
  },
  {
    key: "Supplier",
    label: "Supplier",
    isTitle: false,
    icon: <TbTruckDelivery className="side-bar-item-icon" />,
    children: [
      {
        key: "NewSupplier",
        label: "New Supplier",
        url: "/new-supplier",
        parentKey: "Supplier",
        icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
      },
      {
        key: "SupplierList",
        label: "Supplier List",
        url: "/supplier-list",
        parentKey: "Supplier",
        icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
      },
    ],
  },
  {
    key: "Expense",
    label: "Expense",
    isTitle: false,
    icon: <AiOutlineBank className="side-bar-item-icon" />,
    children: [
      {
        key: "ExpenseType",
        label: "Expense Type",
        url: "/",
        parentKey: "Expense",
        icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
        children: [
          {
            key: "NewExpenseType",
            label: "New Expense Type",
            url: "/new-expense-type",
            parentKey: "ExpenseType",
            icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          },
          {
            key: "ExpenseTypeList",
            label: "Expense Type List",
            url: "/expense-type-list",
            parentKey: "ExpenseType",
            icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          },
        ],
      },
      {
        key: "NewExpense",
        label: "New Expense",
        url: "/new-expense",
        parentKey: "Expense",
        icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
      },
      {
        key: "ExpenseList",
        label: "Expense List",
        url: "/expense-list",
        parentKey: "Expense",
        icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
      },
    ],
  },
  {
    key: "Product",
    label: "Product",
    isTitle: false,
    icon: <BsBox className="side-bar-item-icon" />,
    children: [
      {
        key: "ProductBrand",
        label: "Brand",
        url: "/",
        parentKey: "Product",
        icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
        children: [
          {
            key: "NewBrand",
            label: "New Brand",
            url: "/new-brand",
            parentKey: "ProductBrand",
            icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          },
          {
            key: "BrandList",
            label: "Brand List",
            url: "/brand-list",
            parentKey: "ProductBrand",
            icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          },
        ],
      },
      {
        key: "ProductCategory",
        label: "Category",
        url: "/",
        parentKey: "Product",
        icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
        children: [
          {
            key: "NewCategory",
            label: "New Category",
            url: "/new-category",
            parentKey: "ProductCategory",
            icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          },
          {
            key: "CategoryList",
            label: "Category List",
            url: "/category-list",
            parentKey: "ProductCategory",
            icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          },
        ],
      },
      {
        key: "ProductUnit",
        label: "Unit",
        url: "/",
        parentKey: "Product",
        icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
        children: [
          {
            key: "NewUnit",
            label: "New Unit",
            url: "/new-unit",
            parentKey: "ProductUnit",
            icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          },
          {
            key: "UnitList",
            label: "Unit List",
            url: "/unit-list",
            parentKey: "ProductUnit",
            icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          },
        ],
      },
      {
        key: "ProductModel",
        label: "Model",
        url: "/",
        parentKey: "Product",
        icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
        children: [
          {
            key: "NewModel",
            label: "New Model",
            url: "/new-model",
            parentKey: "ProductModel",
            icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          },
          {
            key: "ModelList",
            label: "Model List",
            url: "/model-list",
            parentKey: "ProductModel",
            icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          },
        ],
      },
      {
        key: "NewProduct",
        label: "New Product",
        url: "/new-product",
        parentKey: "Product",
        icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
      },
      {
        key: "ProductList",
        label: "Product List",
        url: "/product-list",
        parentKey: "Product",
        icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
      },
    ],
  },
  {
    key: "Purchase",
    label: "Purchase",
    isTitle: false,
    icon: <BsBagPlus className="side-bar-item-icon" />,
    children: [
      {
        key: "NewPurchase",
        label: "New Purchase",
        url: "/new-purchase",
        parentKey: "Purchase",
        icon: <AiOutlineUserAdd size={16} className="side-bar-subitem-icon" />,
      },
      {
        key: "PurchaseList",
        label: "Purchase List",
        url: "/purchase-list",
        parentKey: "Purchase",
        icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
      },
    ],
  },
  {
    key: "Sale",
    label: "Sale",
    isTitle: false,
    icon: <BsCartPlus className="side-bar-item-icon" />,
    children: [
      {
        key: "NewSale",
        label: "New Sale",
        url: "/new-sale",
        parentKey: "Sale",
        icon: <AiOutlineUserAdd size={16} className="side-bar-subitem-icon" />,
      },
      {
        key: "SaleList",
        label: "Sale List",
        url: "/sale-list",
        parentKey: "Sale",
        icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
      },
    ],
  },
  {
    key: "Return",
    label: "Return",
    isTitle: false,
    icon: <BsBagX className="side-bar-item-icon" />,
    children: [
      {
        key: "NewSaleReturn",
        label: "New Sale Return",
        url: "/new-sale-return",
        parentKey: "Return",
        icon: <AiOutlineUserAdd size={16} className="side-bar-subitem-icon" />,
      },
      {
        key: "NewPurchaseReturn",
        label: "New Purchase Return",
        url: "/new-purchase-return",
        parentKey: "Return",
        icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
      },
      {
        key: "SaleReturnList",
        label: "Sale Return List",
        url: "/sale-return-list",
        parentKey: "Return",
        icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
      },
      {
        key: "PurchaseReturnList",
        label: "Purchase Return List",
        url: "/purchase-return-list",
        parentKey: "Return",
        icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
      },
    ],
  },
  {
    key: "Report",
    label: "Report",
    isTitle: false,
    icon: <BsGraphUp className="side-bar-item-icon" />,
    children: [
      {
        key: "SaleReport",
        label: "Sale Report",
        url: "/sale-report",
        parentKey: "Report",
        icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
      },
      {
        key: "SaleReturnReport",
        label: "Sale Return Report",
        url: "/sale-return-report",
        parentKey: "Report",
        icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
      },
      {
        key: "PurchaseReport",
        label: "Purchase Report",
        url: "/purchase-return-report",
        parentKey: "Report",
        icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
      },
      {
        key: "PurchaseReturnReport",
        label: "Purchase Return Report",
        url: "/purchase-return-report",
        parentKey: "Report",
        icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
      },
      {
        key: "ExpenseReport",
        label: "Expense Report",
        url: "/expense-report",
        parentKey: "Report",
        icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
      },
    ],
  },
  {
    key: "Message",
    label: "Message",
    isTitle: false,
    url: "/message",
    icon: <BsEnvelope className="side-bar-item-icon" />,
    badge: { variant: "success", text: "40" },
  },
  {
    key: "Setting",
    label: "Setting",
    isTitle: false,
    icon: <AiOutlineSetting className="side-bar-item-icon" />,
    children: [
      {
        key: "Profile",
        label: "Profile",
        url: "/profile",
        parentKey: "Setting",
        icon: <AiOutlineUser size={16} className="side-bar-subitem-icon" />,
      },
      {
        key: "ChangePassword",
        label: "Change Password",
        url: "/change-password",
        parentKey: "Setting",
        icon: <MdPassword size={16} className="side-bar-subitem-icon" />,
      },
      {
        key: "Database Backup",
        label: "Change Password",
        url: "/database-backup",
        parentKey: "Setting",
        icon: <MdOutlineBackup size={16} className="side-bar-subitem-icon" />,
      },
    ],
  },
];

export default MENU_ITEMS;