import Heading from "components/Heading/Heading";
import { nftsAbstracts } from "contains/fakeData";
import React, { FC } from "react";
import CardNFTMusic from "./CardNFTMusic";
import CardNFTMusic2 from "./CardNFTMusic2";

export interface SectionMagazine8Props {
  className?: string;
}

const SectionMagazine8: FC<SectionMagazine8Props> = ({ className = "" }) => {
  return (
    <div className={`nc-SectionMagazine8 relative ${className}`}>
      <Heading
        desc={"Cliquez sur l'icône play et profitez de la musique ou de l'audio NTF."}
        className="mb-14 text-neutral-900 dark:text-neutral-50"
      >
        Écouter l'audio des NFT en direct
      </Heading>
      <div className={`grid grid-cols-1 sm:grid-cols-6 gap-6 2xl:gap-8`}>
        <CardNFTMusic
          featuredImage="https://cdn.naps.shop/products_images/prod_1223/d_box-naps-nap0001-box-les-mains-faites-pour-l-or-cd-front-88.jpg"
          className="sm:col-span-3 xl:col-span-2"
        />
        <CardNFTMusic
          featuredImage="https://afriquinfos.com/wp-content/uploads/2022/10/GIMS-LDVM-dr.jpg"
          className="sm:col-span-3 xl:col-span-2"
        />
        <div className="grid grid-rows-3 gap-6 xl:gap-8 sm:col-span-6 xl:col-span-2">
          {[nftsAbstracts[2], nftsAbstracts[4], nftsAbstracts[7]].map(
            (p, index) => (
              <CardNFTMusic2 featuredImage={p} key={index} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionMagazine8;
