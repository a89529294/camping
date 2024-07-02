import img1 from "@/assets/temp/1.jpg";
import img2 from "@/assets/temp/2.jpg";
import img3 from "@/assets/temp/3.jpg";
import img4 from "@/assets/temp/4.jpg";
import img5 from "@/assets/temp/5.jpg";
import img6 from "@/assets/temp/6.jpg";
import img7 from "@/assets/temp/7.jpg";
import img8 from "@/assets/temp/8.jpg";

export const meals = {
  type: "meals" as const,
  data: [
    {
      id: "1",
      name: "套餐一",
      sections: [
        {
          title: "主餐",
          images: [img1, img2],
          description:
            "麻辣豆腐是一道經典的中國菜，起源於四川省。它以嫩滑的豆腐塊為主，浸泡在由辣椒豆瓣醬為基礎的美味而辛辣的醬汁中，同時搭配了花椒的麻辣風味。通常使用豬肉或牛肉碎肉，為這道菜增添了濃厚的風味。麻辣豆腐獨特的口感和豐富的調味使其成為辛辣愛好者的最愛，也是川菜濃烈而複雜口味的美味代表。",
        },
        {
          title: "副餐",
          images: [img3, img4, img5],
          description:
            "宮保雞丁，又稱宮爆雞丁，是一道經典的中式菜餚。這道菜以切成塊狀的雞肉爲主，配以花生、辣椒和蔥，全部浸泡在甜辣口感的宮保醬汁中。宮保雞丁的口感豐富多樣，雞肉鮮嫩，花生香脆，辣椒提供了一抹微辣的風味。這道菜既有甜味，又有辣味，獨特的調味使其成爲中餐中備受喜愛的經典之一。",
        },
        {
          title: "點心",
          images: [img6, img7, img8],
          description:
            "蛋撻是一道受歡迎的中式甜點。它的外殼是酥脆的餅皮，包裹着柔滑細膩的蛋奶餡料。這個餡料通常由混合雞蛋、糖和牛奶製成，經過烘烤後，呈現出金黃色的外表。蛋撻的獨特之處在於口感的對比，酥脆的外殼與滑爽的蛋奶餡相結合，帶來一種令人陶醉的甜蜜滋味。無論是在茶點間還是慶祝活動中，蛋撻都是備受鍾愛的中式甜品。",
        },
      ],
    },
    {
      id: "2",
      name: "套餐二",
      sections: [
        {
          title: "主餐",
          images: [img8],
          description:
            "燒賣是一種常見的中式點心，通常作爲點心供應。這些開頂的餃子通常包裹有碎豬肉、蝦和各種調味料的混合物。餡料被包裹在薄而透明的小麥或木薯澱粉皮中。燒賣通常是蒸制的，呈現出多汁而美味的口感。它在點心餐廳中很受歡迎，因其精緻的味道和口感而受到喜愛。",
        },

        {
          title: "副餐",
          images: [img3, img4, img5],
          description:
            "北京烤鴨是一道源於北京的著名菜品。它涉及將調味過的鴨子烤至皮膚酥脆金黃，肉質鮮嫩。通常將酥脆的鴨皮與薄餅、海鮮醬和切成蔥花的青蔥一起上桌。食客通常會自己組合薄餅，將美味多汁的鴨肉與其他配料搭配在一起。北京烤鴨以其豐富的味道而聞名，通常被視爲奢侈而喜慶的菜品，常在特殊場合上桌。",
        },
        {
          title: "點心",
          images: [img6, img7, img8, img1],
          description:
            "紅豆包是一道受歡迎的中式甜點。這款點心以紅豆餡爲特色，餡料由紅豆煮爛並加入適量糖製成。紅豆餡包裹在軟綿的麪糰中，然後蒸熟或蒸煮至麪皮鬆軟。這些香甜的包子通常呈現出淡淡的紅色，象徵着吉祥和幸福。紅豆包在中式糕點中是一種經典選擇，以其美味的紅豆餡和柔軟的麪皮而受到人們的喜愛。",
        },
      ],
    },
  ],
};

export type Meal = (typeof meals)["data"][number];
export type Meals = typeof meals;
