import { getOrderById } from "@/lib/action/order.action";
import { APP_NAME } from "@/lib/constant";
import { notFound } from "next/navigation";
import OrderDetailsForm from "./order-details-form";
export const metadata = {
  title: `Order Details - ${APP_NAME}`,
};

const OrderDetailsPage = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  const order = await getOrderById(id);
  /* console.log(order); */
  /* if (!order) notFound(); */
  if (!order) {
    return <div>No order found</div>;
  }

  return;

  ///ADD THIS AT A LATER STAGE ///
  /*  <OrderDetailsForm
    order={order}
    paypalClientId={process.env.PAYPAL_CLIENT_ID || "sb"}
  />; */
};

export default OrderDetailsPage;
