import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment/moment";

const useFeck =(url)=>{
    const [data, setData] = useState([]);
    const[isLoading, setIsisLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        setTimeout(() => {
        axios
            .get(url)
            .then((res) => {
            console.log('check res>>>',res.data);
            res.data.map((item)=>{
                item.Date = moment(item.Date).format("DD/MM/YYYY");
                return item;
            }) 
            setData(res.data.reverse());
            setIsisLoading(false);
            })
            .catch((err) => {
            setIsisLoading(false);
            setIsError(true);
            console.log(err);
            });
        },2000);
        }, []);
        return {data, isLoading, isError};
}

export default useFeck;