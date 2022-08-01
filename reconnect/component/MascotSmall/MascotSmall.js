import mascotsmall from "../../public/images/Mascot.png"
import Image from "next/image"

export default function MascotSmall(){
    return(
        <Image layout="intrinsic" src={mascotsmall} alt="Mascot" width={79.96} height={51.82} />
    )
}