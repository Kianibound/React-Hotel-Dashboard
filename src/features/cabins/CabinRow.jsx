/* eslint-disable react/prop-types */
import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";

import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeleteCabin";
import { HiDocumentDuplicate, HiTrash, HiPencil } from "react-icons/hi";
import { useCreateCabin } from "./useCreateCabin";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";



const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

// eslint-disable-next-line react/prop-types
const CabinRow = ({ cabin }) => {
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isCreating, createCabin } = useCreateCabin();

  const {
    id: cabinId,
    name,
    maxCapacity,
    discount,
    image,
    regularPrice,
    description,
  } = cabin;

  function handleDuplicate() {
    // TODO : Problem with duplicating Image. Image Does not Duplicate
    createCabin({
      name: `Duplicate of ${name}`,
      maxCapacity,
      discount,
      image,
      regularPrice,
      description,
    });
  }
  return (
    <>
      <Table.Row>
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <Price>{formatCurrency(regularPrice)}</Price>
        <Price>
          {discount ? formatCurrency(discount) : <span>&mdash;</span>}
        </Price>
        <div>{maxCapacity}</div>
        <div>
          <button disabled={isCreating} onClick={handleDuplicate}>
            <HiDocumentDuplicate />
          </button>
          <Modal>
            <Modal.Open opens="edit">
              <button>
                <HiPencil />
              </button>
            </Modal.Open>

            <Modal.Window name="edit">
              <CreateCabinForm cabinToEdit={cabin} />
            </Modal.Window>

            <Modal.Open opens="delete">
              <button>
                <HiTrash />
              </button>
            </Modal.Open>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="cabins"
                disabled={isDeleting}
                onConfirm={() => deleteCabin(cabinId)}
              />
            </Modal.Window>
          </Modal>
        </div>
      </Table.Row>
    </>
  );
};

export default CabinRow;
