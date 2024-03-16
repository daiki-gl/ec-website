import axios from "axios"
import BreadCrumb from "../../components/Shop/BreadCrumb"
import ShopMain from "../../components/Shop/ShopMain"
import { config } from "../../../config"

const Shop = async() => {
  // const { data: productsData } = await axios(`${config.MAIN_URL}/api/getProducts`, { method: 'GET' }).then(res => {
  //   return res.data
  // }).catch(err => {
  //   console.log(err)
  // })

  let responseClone:any;
  const productsData = await fetch(`${config.MAIN_URL}/api/getProducts`)
  .then(function (response) {
    responseClone = response.clone(); // 2
    return response.json();
})
.then(function (data) {
    // Do something with data
    console.log('DATA*************', data)
}, function (rejectionReason) { // 3
    console.log('Error parsing JSON from response:', rejectionReason, responseClone); // 4
    responseClone.text() // 5
    .then(function (bodyText:string) {
        console.log('Received the following instead of valid JSON:', bodyText); // 6
    });
});

  // const productsData = await fetch(`${config.MAIN_URL}/api/getProducts`)
  //   .then((res) => {
  //       return res.json();
  // }).catch(err => {
  //   console.log(err)
  // })

  // const resPro = await fetch(`${config.MAIN_URL}/api/getProducts`)
  // const productsData = await resPro.json()


  return (
    <div className="max-w-[1150px] mx-auto mt-2 px-3 md:px-0">
        <BreadCrumb />
        {/* <ShopMain productsData={productsData} /> */}
    </div>
  )
}

export default Shop