import { useEffect, useState } from "react"
import { CardForWomanSt } from "../components/CardForWomanSt"
import card1 from "../img/card1.png"
import card2 from "../img/card2.png"
import card3 from "../img/card3.png"
import card4 from "../img/card4.png"
import axios from "axios"

export const WomenSaction = () => {

  const [womProdGet, womProdSet] = useState([])

  const getWomanProducts = async () => {
    try {
      const resp = await axios(`https://fakestoreapi.com/products/category/women's%20clothing`)
      console.log(resp)
      womProdSet(resp.data)
    } catch (error) {
      console.error("Ошибка при получении данных: ", error)
    }
  }

  useEffect(() => {
    getWomanProducts()
  }, [])

  return (
    <section className="WomenSaction">
      <div className="container">
        <p className="WomenS__title">Women's Fashion</p>
        <p className="WomenS__discrip">Shop our new arrivals from established brands</p>

        <div className="WomenCards">

          {
            womProdGet?.slice(0,4).map(el => (
              <CardForWomanSt
                key={el?.id}
                imgLink={el?.image}
                brand={'igure'}
                discrip={el?.title}
                oldPrice={'$229.00'}
                newPrice={el?.price}
              />
            ))
          }

          {/* <CardForWomanSt
            imgLink={card1}
            brand={'igure'}
            discrip={'GREEN MUSCLE FIT POLO SHIRT'}
            oldPrice={'$229.00'}
            newPrice={'$129.00'}
          />

          <CardForWomanSt
            imgLink={card2}
            brand={'igure'}
            discrip={'GREEN MUSCLE FIT POLO SHIRT'}
            oldPrice={'$229.00'}
            newPrice={'$129.00'}
          />

          <CardForWomanSt
            imgLink={card3}
            brand={'igure'}
            discrip={'GREEN MUSCLE FIT POLO SHIRT'}
            oldPrice={'$229.00'}
            newPrice={'$129.00'}
          />

          <CardForWomanSt
            imgLink={card4}
            brand={'igure'}
            discrip={'GREEN MUSCLE FIT POLO SHIRT'}
            oldPrice={'$229.00'}
            newPrice={'$129.00'}
          /> */}
        </div>
      </div>
    </section>
  )
}