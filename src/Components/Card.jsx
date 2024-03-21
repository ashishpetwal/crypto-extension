const Card = ({ coin }) => {

    return (
        <div className="flex space-x-4 max-w-sm justify-center items-center my-4 p-2 rounded-lg w-full bg-slate-100">
            <div className="flex items-center space-x-4 min-w-24">
                <img src={coin.image} alt="random" className="w-8 rounded-full" />
                <p className="text-gray-700 font-medium">
                    {coin.symbol.toUpperCase()}
                </p>
            </div>
            <div className="min-w-24">
                <p className="text-lg font-semibold text-gray-600">
                    ${parseFloat(coin.current_price).toFixed(2)}
                </p>
            </div>
            <div className="min-w-24">
                <p className={`text-xl font-semibold ${coin.price_change_percentage_24h > 0 ? "text-green-600" : "text-red-600"}`}>
                    {parseFloat(coin.price_change_percentage_24h).toFixed(2)}%
                </p>
            </div>
        </div>
    );
}

export default Card;