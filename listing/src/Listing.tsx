type Props = {
    items: Array<{
        listing_id: number,
        url: string,
        MainImage: { url_570xN: string },
        title: string,
        currency_code: string,
        price: string,
        quantity: number
    }>;
};

export default function Listing(props: Props) {
    if (!props.items) {
        return null;
    }

    return (
        <div className="item-list">
            {props.items.map(item => <div className="item" key={item.listing_id}>
                <div className="item-image">
                    <a href={item.url}>
                        <img alt={`${!item.title ? "Title" : item.title.slice(0, 10)}...`}
                             src={item.MainImage?.url_570xN ?? "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"}/>
                    </a>
                </div>
                <div className="item-details">
                    <p className="item-title">{!item.title ? "Title" : item.title.length > 50 ? `${item.title.slice(0, 50)}...` : item.title}</p>
                    <p className="item-price">{item.currency_code === 'USD' ? `$${item.price}` :
                        item.currency_code === "EUR" ? `€${item.price}` : `${item.price} GBP`}</p>
                    <p className={`item-quantity level-${item.quantity <= 10 ? 'low' : item.quantity <= 20 ? 'medium' : 'high'}`}>
                        {item.quantity} left</p>
                </div>
            </div>)}
        </div>
    )
}
