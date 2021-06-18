import axios from "axios"
import { useEffect, useState } from "react"
import ContactItem from "../components/ContactItem"


const PhoneBook = () => {

    const [phoneList, setPhoneList] = useState([])

    const callBackDelete = (childData) => {
        axios.delete(`https://address-book-exp-api.herokuapp.com/users/${childData}`).then((res) => {
            loadData()
        })
    }

    const callBackFavorite = (childData) => {

        const data = phoneList.filter(x => x.id === childData)?.pop()
        const temp = {...data,favorite:!data.favorite}
        if (data != null) {
            axios.patch(`https://address-book-exp-api.herokuapp.com/users/${childData}`,temp).then((res) => {
                loadData()
            })
        }
    }

    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        axios.get("https://address-book-exp-api.herokuapp.com/users?page=1").then((res) => {
            const dataList = res.data.data
            setPhoneList(dataList)
        })
    }

    return (
        <div>
            {phoneList && phoneList.map((item, index) =>
                <ContactItem onClickDelete={callBackDelete} onClickFavorite={callBackFavorite} key={item.id} item={item} />
            )}

        </div>
    )
}

export default PhoneBook