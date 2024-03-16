import BreadCrumb from "../../components/Shop/BreadCrumb"
import ShopMain from "../../components/Shop/ShopMain"
import { config } from "../../../config"

const Shop = async() => {
  let responseClone:any;
  const productsData = await fetch(`${config.MAIN_URL}/api/getProducts`)
  .then(function (response) {
    responseClone = response.clone();
    return response.json();
})
.then(function (data) {
    console.log('DATA*************', data)
}, function (rejectionReason) { // 3
    console.log('Error parsing JSON from response:', rejectionReason, responseClone);
    responseClone.text()
    .then(function (bodyText:string) {
        console.log('Received the following instead of valid JSON:', bodyText);
    });
});

  return (
    <div className="max-w-[1150px] mx-auto mt-2 px-3 md:px-0">
        <BreadCrumb />
        <ShopMain productsData={productsData} />
    </div>
  )
}

export default Shop