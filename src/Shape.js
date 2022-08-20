import { useEffect } from "react";
import { motion, useCycle } from "framer-motion";
const itemsA = [1, 2, 3, 4];
const itemsB = [3, 1, 4, 2];
const itemsC = [4, 3, 2, 1];
const itemsD = [2, 4, 1, 3];

const colors = ["#caf0f8", "#ade8f4", "#90e0ef", "#48cae4"];


export default function Shape(){
    const [items, setItems] = useCycle(itemsA, itemsB, itemsC, itemsD);

    useEffect(() => {
        setTimeout(() => setItems(), 1500);
    }, [items, setItems]);

    return (
        <div className="squares">
            {items.map((item) => (
                <motion.div
                className="smallSquare"
                    style={{
                        
                        backgroundColor: colors[item - 1]
                    }}
                    key={item}
                    layout
                    transition={{ type: "spring", stiffness: 350, damping: 33 }}
                />
            ))}
        </div>
    );

}
