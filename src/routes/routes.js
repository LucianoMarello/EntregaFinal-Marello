import CartContainer from "../components/pages/cart/CartContainer";
import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";
import Home from "../components/pages/home/Home";
import ItemDetailContainer from "../components/pages/itemDetail/ItemDetailContainer";
import ItemListContainer from "../components/pages/itemList/ItemListContainer";
import SignInContainer from "../components/pages/log/SignInContainer";
import MyProfileContainer from "../components/pages/myProfile/MyProfileContainer";
import RegisterContainer from "../components/pages/register/RegisterContainer";

export const routes = [
    {
        id: "home",
        path: "/",
        Element: Home
    },
    {
        id: "store",
        path: "/tienda",
        Element: ItemListContainer
    },
    {
        id: "category",
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
    },
    {
        id: "myProfile",
        path: "/myProfile",
        Element: MyProfileContainer
    },
    {
        id: "signIn",
        path: "/signIn",
        Element: SignInContainer
    },

]