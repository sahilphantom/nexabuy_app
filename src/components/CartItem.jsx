import React from "react"


const CartItem = ({ item, updateQuantity, removeFromCart }) => {
    return (
      <tr className="border-b border-gray-200">
        <td className="py-4">
          <div className="flex items-center space-x-4">
            <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-16 h-16 object-cover rounded" />
            <span className="font-medium">{item.name}</span>
          </div>
        </td>
        <td className="py-4">${item.price}</td>
        <td className="py-4">
          <div className="flex items-center border rounded w-24">
            <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} className="px-2 py-1">
              -
            </button>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value) || 1)}
              min="1"
              className="w-full px-2 py-1 text-center focus:outline-none"
            />
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1">
              +
            </button>
          </div>
        </td>
        <td className="py-4">${item.price * item.quantity}</td>
        <td className="py-4">
          <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
            Remove
          </button>
        </td>
      </tr>
    )
  }
  
  export default CartItem;