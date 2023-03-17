import React, { useState } from "react";
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from "./ListView";

const products = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
}, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
}, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
}, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
}, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
}, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}];

// export default function Store({ products }) {
//     const [value, setValue] = useState('view-list');

//     function changeView() {
//         if (value === 'view_module') {
//             return setValue('view_list');
//         } else {
//             return setValue('view_module');
//         }
//     }

//     return (
//         <div className="store-page">
//             <IconSwitch icon={value} onSwitch={() => changeView()} />
//             {value === 'view_module' ? <CardsView cards={products} /> : <ListView items={products} />}
//         </div>
//     );
// }

export default function Store() {
    let [state, setState] = useState("module");
    let [icon, setIcon] = useState("view_module");

    let module = () => {
        return <CardsView products={products} />;
    };
    let list = () => {
        return <ListView products={products} />;
    }
    let view = state === "module" ? module() : list();

    const onSwitch = () => {
        let viewIcon = icon === "view_module" ? "view_list" : "view_module";
        let view = state === "module" ? "list" : "module";
        setIcon(icon = viewIcon);
        setState(state = view);
    };

    return (
        <div className="store-page">
            <div className="store">
                <IconSwitch icon={icon} onSwitch={onSwitch} />
            </div>
            <div className="view__conteiner">
                {view}
            </div>
        </div>
    );
}