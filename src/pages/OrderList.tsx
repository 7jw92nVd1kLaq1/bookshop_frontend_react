import styled from "styled-components";
import Title from "../components/common/Title";
import useOrderList from "../hooks/useOrderList";
import Button from "../components/common/Button";


const OrderList = () => {
  const { 
    orderList,
    pagination,
    isLoading,
    isError,
    isSuccess,
    error,
    page,
    setPage
   } = useOrderList();
  return (
    <OrderListStyle>
      <Title size="large">Order List</Title>
      <div id="order-list-container">
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error: {error}</div>}
        {isSuccess && orderList?.map((order) => (
          <div className="order" key={order.ordersId}>
            <div className="order-id">{order.ordersId}</div>
            <div className="order-status">{order.status}</div>
            <div className="order-first-item">{order.books[0].booksTitle}</div>
            <Button scheme="primary" size="small">View</Button>
          </div>
        ))}
      </div>
      <div id="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
        <span>{page} of {pagination.totalPages}</span>
        <button onClick={() => setPage(page + 1)} disabled={page === pagination.totalPages}>Next</button>
      </div>
    </OrderListStyle>
  );
}

const OrderListStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 80%;
  margin: 50px auto;

  #order-list-container {
    display: flex;
    flex-direction: column;
    item-align: stretch;
    width: 100%;
    margin-top: 20px;
  }

  #pagination {
    display: flex;
    justify-content: center;
    margin: 20px 0px;
  }

  .order {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border: 1px solid #ccc;
    margin-top: 10px;
    background-color: ${({theme}) => theme.color.secondary};
    .order-id {
      font-weight: bold;
      width: 10%;
    }
    .order-status {
      width: 30%;
    }
    .order-first-item {
      width: 50%;
    }
    button {
      width: 10%;
    }
  }
`;
  

export default OrderList;