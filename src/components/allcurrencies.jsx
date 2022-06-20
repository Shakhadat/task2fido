import React, {useEffect, useState, useRef} from "react";
import 'antd/dist/antd.css';
import { Card } from 'antd';
import styles from './index.module.sass';
import {Api} from '../api';
import ReactPaginate from "react-paginate";

export const Curriensies=()=>{

    const [currensies, setCurrensies]=useState([]);
    const [query, setQuery] = useState("");
    const [filterData, setFilteredData] = useState([]);
    const [isClicked, setIsclicked] = useState(false);
    const [pageCount, setpageCount] = useState(0);

    let limit = 6;

   


    const getData = async () => {
        const newProducts = await Api({
            url: `https://nbu.uz/uz/exchange-rates/json/`,
            type: "get",
        });

        setCurrensies(newProducts.data);
        console.log("discount", newProducts.data);
   
        
    };
  

    const handelFilter=()=>{
        setIsclicked(!isClicked);
        const newData=[...currensies];
        setFilteredData(
            newData?.filter(data=>{
                if((data.nbu_buy_price!=="")&&(data.nbu_cell_price!=="")){
                    return [...filterData, data]
                }
            })
        )
       console.log(isClicked)
    }
  useEffect(() => {
    getData();
    console.log(currensies);
    console.log(isClicked)
  }, []);

  

    return(
        <div className="container my-3">
            <div className="input-group mb-3">
                <input 
                    onChange={event => setQuery(event.target.value)} 
                    type="text" class="form-control" 
                    placeholder="Search by name" 
                    aria-label="Recipient's username" 
                    aria-describedby="button-addon2"/>
                    <button 
                        type="button" 
                        onClick={()=>handelFilter()}
                        className="btn btn-info text-white"
                    >
                        {isClicked?'barcha kurs valyutalar':"sotish-olish summasi bilan"}
                    </button>
            </div>
            <div className={styles.currensylist}>
               {
                    isClicked ?
                    filterData?.map((item)=>{
                return(
                    <Card
                        key={item.code}
                         title={`${item.title}`}
                         extra={<a href="#">More</a>}
                         style={{
                           width: 300,
                         }}
                     >
                         <p>Sotish: {item.nbu_cell_price}</p>
                         <p>Sotib olish: {item.nbu_buy_price}</p>
                         <p>Markaziy bankda narx: {item.cb_price}</p>
                         <p>Sana: {item.date}</p>
                    </Card>
                );
                
                    }) :

                    currensies?.filter(post=>{
                        if(query===''){
                            return post;
                        }else if(post.title.toLowerCase().includes(query.toLowerCase()))
                        return post;
                    })?.map((item)=>{
                        return(
                            <Card
                                key={item.code}
                                 title={`${item.title}`}
                                 extra={<a href="#">More</a>}
                                 style={{
                                   width: 300,
                                 }}
                             >
                                 <p>Sotib olish: {item.nbu_cell_price}</p>
                                 <p>Sotib olish: {item.nbu_buy_price}</p>
                                 <p>Markaziy bankda narx: {item.cb_price}</p>
                                 <p>Sana: {item.date}</p>
                            </Card>
                        );
                        
                    })
               } 
           
                
            </div>


           
        </div>
    );
}

