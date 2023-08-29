import CartContainer from "../components/pages/cart/CartContainer";
import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";
import ItemDetailContainer from "../components/pages/itemDetail/ItemDetailContainer";
import ItemListContainer from "../components/pages/itemList/ItemListContainer";
import RegisterContainer from "../components/pages/register/RegisterContainer";

export const routes = [
    {
        id: "home",
        path: "/",
        Element: ItemListContainer
    },
    {
        id: "store",
        path: "/tienda/:category",
        Element: ItemListContainer
    },
    {
        id: "detail",
        path: "/itemDetail/:id",
        Element: ItemDetailContainer
    },
    {
        id: "cart",
        path: "/cart",
        Element: CartContainer
    },
    {
        id: "register",
        path: "/register",
        Element: RegisterContainer
    },
    {
        id: "checkout",
        path: "/checkout",
        Element: CheckoutContainer
    }
]