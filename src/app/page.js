import Script from "next/script";
import Home from "@/components/Pages/Home-page/Home";

export default function Main() {
    return (
        <>
            <Home />
            <Script data-cfasync="false" src={"https://cdn.foxycart.com/evgoods/loader.js"} async defe/>
        </>
    );
}
