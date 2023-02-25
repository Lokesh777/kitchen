
import styles from "./All.module.css";
import { BiStar } from "react-icons/bi";
import { FaGreaterThan } from "react-icons/fa";
export default function Card(props){

    const { backgroundImage,heading } = props;

    return (
        <div className={styles.cardContainer}        
          style={{ backgroundImage:`url(${backgroundImage})`}}
        >
                   <div className={styles.upDiv} ></div>
                   
                    <div className={styles.bottomDiv}>
                        <h3 className={styles.heading1}>
                            {heading}
                        </h3>
                        <p className={styles.pTag}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci sunt porro maiores distinctio, eos, magnam assumenda.</p>
                       <hr className={styles.hrTag} />

                       <div className={styles.exploreRow}>
                        <button className={styles.btnExplore}>
                            Explore <FaGreaterThan className={styles.btnForward}  />
                        </button>
                        <button className={styles.btnstar2}>
                            <BiStar size={15} className={styles.star} /> Rated
                        </button>
                       </div>

                    </div>

        </div>
    )
}