import Image from "next/image";
import styles from "./page.module.css";
import Zapier from "../images/clientImages/zapier.png"


export default function Home() {
  return (
    <>
      <div className="mainHero">
        <div className="heroText">
          <span className="welcome">Welcome to chairy</span>
          <h1 className="heroHead">
            Best Furniture Collection for your interior.
          </h1>
          <button className="heroBtn">
            Shop Now <span className="heroBtnIcon"></span>
          </button>
        </div>
        <div className="heroImg">
          <div className="heroImgChild"></div>
        </div>
      </div>
      <div className="clients">
        <div className="zapier"></div>
        <div className="pipedrive"></div>
        <div className="cibBank"></div>
        <div className="z"></div>
        <div className="bruntToast"></div>
        <div className="pandadoc"></div>
        <div className="moz"></div>
      </div>
      <div className="featuredProducts">
        <div className="featiredcarts">
          <div className="featiredImg1">
            <div className="img"><div className="tagNew">new</div></div>
          </div>
          <div className="text">
            <div className="featuredDetails">
              <div className="featuredName">Library Stool Chair</div>
              <div className="featuredPrice">$20</div>
            </div>
            <div className="featuredCart"></div>
          </div>
        </div>
        <div className="featiredcarts">
          <div className="featiredImg2">
            <div className="img"><div className="tagSales">Sales</div></div>
          </div>
          <div className="text">
            <div className="featuredDetails">
              <div className="featuredName">Library Stool Chair</div>
              <div className="featuredPrice">$20</div>
            </div>
            <div className="featuredCart"></div>
          </div>
        </div>
        <div className="featiredcarts">
          <div className="featiredImg3">
            <div className="img"></div>
          </div>
          <div className="text"><div className="featuredDetails"><div className="featuredName">Library Stool Chair</div>
            <div className="featuredPrice">$20</div></div>
            <div className="featuredCart"></div></div>
        </div>
        <div className="featiredcarts">
          <div className="featiredImg4">
            <div className="img"></div>

          </div>
          <div className="text"><div className="featuredDetails"><div className="featuredName">Library Stool Chair</div>
            <div className="featuredPrice">$20</div></div>
            <div className="featuredCart"></div></div>
        </div>
      </div>
      <div className="topCatogories">
        <h1 className="topCatogoriesHead">Top Catogories</h1>
        <div className="topItems">
          <div className="topItem1">
            <div className="topDetails">
              <h2>Wing Chair</h2>
              
              <div className="stock">3,584 Products</div>
            </div>
          </div>
          <div className="topItem2">
            <div className="topDetails">
              <h2>Wooden Chair</h2>
              <div className="stock">157 Products</div>
            </div>
          </div>
          <div className="topItem3">
            <div className="topDetails">
              <h2>Desk Chair</h2>
              <div className="stock">154 Products</div>
            </div>
          </div>
        </div>
      </div>
      <div className="hotcatogory">
      </div>

<div className="our">
<h1 className="ourProducts">Our Products</h1>
      <div className="featuredProducts After">
        <div className="featiredcarts">
          <div className="featiredImg1">
            <div className="img"><div className="tagNew">new</div></div>
          </div>
          <div className="text">
            <div className="featuredDetails">
              <div className="featuredName">Library Stool Chair</div>
              <div className="featuredPrice">$20</div>
            </div>
            <div className="featuredCart"></div>
          </div>
        </div>
        <div className="featiredcarts">
          <div className="featiredImg2">
            <div className="img"><div className="tagSales">Sales</div></div>
          </div>
          <div className="text">
            <div className="featuredDetails">
              <div className="featuredName">Library Stool Chair</div>
              <div className="featuredPrice">$20</div>
            </div>
            <div className="featuredCart"></div>
          </div>
        </div>
        <div className="featiredcarts">
          <div className="featiredImg3">
            <div className="img"></div>
          </div>
          <div className="text"><div className="featuredDetails"><div className="featuredName">Library Stool Chair</div>
            <div className="featuredPrice">$20</div></div>
            <div className="featuredCart"></div></div>
        </div>
        <div className="featiredcarts">
          <div className="featiredImg4">
            <div className="img"></div>

          </div>
          <div className="text"><div className="featuredDetails"><div className="featuredName">Library Stool Chair</div>
            <div className="featuredPrice">$20</div></div>
            <div className="featuredCart"></div></div>
        </div>
        <div className="featiredcarts">
          <div className="featiredImg5">
            <div className="img"><div className="tagNew">new</div></div>
          </div>
          <div className="text">
            <div className="featuredDetails">
              <div className="featuredName">Library Stool Chair</div>
              <div className="featuredPrice">$20</div>
            </div>
            <div className="featuredCart"></div>
          </div>
        </div>
        <div className="featiredcarts">
          <div className="featiredImg6">
            <div className="img"><div className="tagSales">Sales</div></div>
          </div>
          <div className="text">
            <div className="featuredDetails">
              <div className="featuredName">Library Stool Chair</div>
              <div className="featuredPrice">$20</div>
            </div>
            <div className="featuredCart"></div>
          </div>
        </div>
        <div className="featiredcarts">
          <div className="featiredImg7">
            <div className="img"></div>
          </div>
          <div className="text"><div className="featuredDetails"><div className="featuredName">Library Stool Chair</div>
            <div className="featuredPrice">$20</div></div>
            <div className="featuredCart"></div></div>
        </div>
        <div className="featiredcarts">
          <div className="featiredImg8">
            <div className="img"></div>

          </div>
          <div className="text"><div className="featuredDetails"><div className="featuredName">Library Stool Chair</div>
            <div className="featuredPrice">$20</div></div>
            <div className="featuredCart"></div></div>
        </div>
      </div>
</div>

    </>
  );
}
