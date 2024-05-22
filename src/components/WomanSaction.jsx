import { CardForWomanSt } from "./CardForWomanSt"
import card1 from "../img/card1.png"
import card2 from "../img/card2.png"
import card3 from "../img/card3.png"
import card4 from "../img/card4.png"

export const WomenSaction = () => {
  return (
    <section className="WomenSaction">
      <div className="container">
        <p className="WomenS__title">Women's Fashion</p>
        <p className="WomenS__discrip">Shop our new arrivals from established brands</p>

        <div className="WomenCards">
          <CardForWomanSt
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
          />
        </div>
      </div>
    </section>
  )
}