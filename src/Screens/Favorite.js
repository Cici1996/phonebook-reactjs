import axios from "axios"
import { useEffect, useState } from "react"
import ContactItem from "../components/ContactItem"


const Favorite = () => {

    const [favoriteList, setfavoriteList] = useState([])

    useEffect(() => {
        axios.get("https://address-book-exp-api.herokuapp.com/users?page=1").then((res) => {
            const dataList = res.data.data
            const dataFilter = dataList.filter(x => x.favorite)
            setfavoriteList(dataFilter)
        })
    }, [])

    return (
        <div>
            {favoriteList && favoriteList.map((item, index) =>
                <ContactItem key={item.id} item={item} />
            )}

        </div>
    )
}

export default Favorite