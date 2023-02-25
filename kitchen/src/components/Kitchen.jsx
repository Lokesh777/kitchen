import { Box, Center, Flex } from "@chakra-ui/react";
import { IoRestaurantOutline } from "react-icons/io5";
import styles from "./All.module.css";
import Card from "./Card";
import Carousel from "./Carousel";
import InfoCard from "./infoCard";
import { FaCarrot } from "react-icons/fa";
import { GiWheat,GiCentaurHeart,GiShinyApple } from "react-icons/gi";

const data = [
    
       {
         heading:"Crispy French Fries",
         backgroundImage:"https://s3-alpha-sig.figma.com/img/749d/a788/04eec019f700b151c1c59b96683121f5?Expires=1678060800&Signature=Vn4mooBQFnM3GhY6tp1w85DLVAM6LegqWR54FtIFlYx~VipUt2hAXiecJsnO9Q7q~5dbtPSLKaCGQGCDoSXfhcGyjCvEMlkVSMNcGRmjRBvyJEfwcHuhxDG4uZsHzMbFdIHizlOXwDYShcSScj-vBGCcOLlReY45FrS-kYNqR-aEZPyTW--3oLkJ-DQWtlfbhcM-IyBtOEJcasZd0ihwUh6ku8CPFTB-4VZAvaAawaGWJf6oP7IMXD6PY1Ky~rfHTyVSj254bn~zaZOgSmzpKccNxDfEhbHhAN64KFUva-FE~4IEJ00-ar8J0bXfE8i7lMGTX2WebL-YtYQUA1diwA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
       },
       {
         heading:"Paneer Tikka",
         backgroundImage:"https://s3-alpha-sig.figma.com/img/bfe4/7245/ddb5f574cc5caa7991dc3f591fad9496?Expires=1678060800&Signature=TxkzbH0pLmvDK5NNNrJz8pdpNnLkAoNicB2knCli48RN84OGcWUngjeUqD100282hh--cyHxJ9NKjQ5lRqb0bzwfV~jGnv9dMmnLcYkVgCaL2VHZkx7EWmFiUg-48XpLHU1FK5rnzgGcYBxlsJvPbVyr-ER2ElZxupX-w0bMNl6Vv3cgMHWM-JC9~bPPE8OW9aCDM59s~B90jWF59WCaisB3~1k~Rj6TVCQ6zO1zAw6~YMSFFapBryRQKOYEVmhhFM9-375qkiHerLhq4j3W9f55cavHYWAc7gzP5t~e4u~IFdK9fOsDfjLfJW7oQ6sSkuZlfxfvWUTXUiLdGf~AzQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
       },
       {
         heading:"Macaroon",
         backgroundImage:"https://s3-alpha-sig.figma.com/img/6814/0906/e59a9e28cf04ba871b8dab3cc0a54480?Expires=1678060800&Signature=TADGIeqgMa8vJHHQAE9MzAUHl5Vk9V6A9-xrbAJLDzG0UuppgLWEQLCIeHtNVl29cfZXL-B3DN7tAdq6tWFStKSjFSIY9i3M3KrTLFDIN9wapGyQOn9fXCuQ0DvchwxM6pLhosAD91TtHf7lmFkjFYmHxfOc3L3jzBGAccNhOI~CY3vrK~9LUB3h3o4RHt0ncEypNV8GuXWYpCTU55MgJXyJ88-qbxo1Uxj6f5JRP8ZU62rlJQDvhFfPfF5-J2l4OLpYiHtDRyWoNki2SgbGfSvDgBJ7l47upY2NNfb-knM056-CkvrIuzAeYdxYOVCABossqQK0D7~cLYhiHkquvg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
       },
       {
         heading:"Doughnut",
         backgroundImage:"https://s3-alpha-sig.figma.com/img/eb40/98c4/f8513b6a569122d18ef709a90c0d80dd?Expires=1678060800&Signature=EHCCWCkmkfSDBH21g4C80U-dtA~U-SOXpJqidwzaXItsdtLidBaYwkQnMEHGQOqlECZneqigyJnwxpaA6HZ8nLa3o3x1KJ4Rwr2lWIw5ElDHJ9c9c35XOq7cQf~tggVVvO9ZkQPFM23yN~wjdr~nAaVoV72iiwlhu9oeHroORrsqxWYvTvEwYVgnaPC6tGidlmv0H-CJ9j45S6lWEsx0R5p17rt92~yiGaSry7bSuAIKDbjRPeOvThxApyhWzVSkCpqXbyPH4t84cuj8Mana1~gmw-GceX2RliTRbNmYvw7XAHzea4pDsnuI3hgHMK1AAoGEVt7wjxPo-7F0AheB4g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
       },
    
]

export default function Kitchen(){

    return (
        <div>
            <Center  style={{
            background: "#FFFFFF",
            boxShadow:" 0px 1px 7px 1px rgba(5, 5, 5, 0.41)",
            paddingBottom: "1rem",
            paddingTop: "1rem"
            }} >

                <IoRestaurantOutline color="#FFA800" /> <span className={styles.logoText} >
                Culinary kitchen</span>
            </Center>
            <Center className={styles.vari}>
              <div>
                V A R I E T I E S 
             </div>            
             <div className={styles.underline}></div>
            </Center>
            

            <Flex justifyContent={"space-evenly"}>
                <Box
                 className={styles.firstHalf}
                >
                   <Card
                   heading={"Pizza is a savory dish of Italian origin"}
                   backgroundImage="https://s3-alpha-sig.figma.com/img/65f3/bdfc/9c473810f81aa30acad4a050beba8cf9?Expires=1678060800&Signature=Jil8rQIkrjxpn-t8glLWy9UqS-617CBb-zR3JiFN9ObFNLY6xoQFUkPsIBOAAYWqUG~nCUIOfDG~5wu6JOBJ9S0ZJrltAgQslAhfs2Zi9EkeygoSsCZOVDBWjfDc6ukt6eIQYOGn7mIicY3wTQjJXEXPtbeJ0~SWdRLU-p1WtPSyxqK29u7xcrahD6bI9j~NGgp2brwsss4dAQ-OilJZo6yKpd9hnpM~IB4~nAlFua4kqkjweo8zxZ8N6bGRmHCG1kQEPfOMJaD0QhDce~Uk0eLziKZsiFKHAreSeyFU4n1jC9HmjhE-agD5EiRUd6ArI~KJhBL9iMnD0osEQB0Zbg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                   />
                  
                 

                </Box>
                <Box className={styles.secondHalf}>
                  {data.map((ele)=>
                  
                        <Card
                            heading={ele.heading}
                            backgroundImage={ele.backgroundImage}
                            />
                  )}
                    
                     
               
                   

                  
                </Box>
            </Flex>
             <br />
            <Flex className={styles.descriBox}>
                <Box className={styles.descri}>
                    <h3>Indian Cuisine</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </Box>
               
               <Box className={styles.descri}>
                    <h3>American Cuisine</h3>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
                    </p>
               </Box>

                <Box className={styles.descri}>
                    <h3>Chinese Cuisine</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </Box>


            </Flex>

            <Center className={styles.chef}>
              <div>
              T O P  -  C H E F S
             </div>            
             <div className={styles.underlineChef}></div>
            </Center>

            <Box className={styles.profile} >
             <Carousel />
            </Box>

            <Center >
              <div className={styles.food}>
              F O O D  -  G U I D E
             <div className={styles.underlineFood}></div>
             </div>            
            </Center>

             <Box className={styles.banner}>
                <Flex justifyContent={"space-between"}>
                  <InfoCard
                   pic={<FaCarrot color="white" size={20} />}
                   title="VEGETABLES"
                   text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                  />
                  <InfoCard
                   pic={<GiWheat color="white" size={20} />}
                   title="WHOLE GRAINS"
                   text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                  />

                </Flex>
                <br />
                <br /> <br />
                <Flex justifyContent={"space-between"}>
                  <InfoCard
                   pic={<GiShinyApple color="white" size={20} />}
                   title="FRUITS"
                   text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                  />
                  <InfoCard
                   pic={<GiCentaurHeart color="white" size={20} />}
                   title="HEALTHY PROTEIN"
                   text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                  />

                </Flex>

             </Box>

        </div>
    )
}