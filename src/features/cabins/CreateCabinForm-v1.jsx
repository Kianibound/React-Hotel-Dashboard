/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabins } from "../../services/apiCabins";
import { toast } from "react-hot-toast";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

function CreateCabinForm({ cabin }) {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset, getValues, formState } = useForm();

  const { errors } = formState;

  const { isLoading: isCreating, mutate } = useMutation({
    mutationFn: createCabins,
    onSuccess: () => {
      toast.success("Cabin Successfully created");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  const onSubmitCabin = (data) => {
    mutate({ ...data, image: data.image[0] });
  };

  const onError = (errors) => {
    // console.log(errors);
  };
  return (
    <Form onSubmit={handleSubmit(onSubmitCabin, onError)}>
      <FormRow error={errors?.name?.message} label="Cabin Name">
        <Input
          type="text"
          id="name"
          {...register("name", {
            required: "This Field Is Requiered",
          })}
        />
      </FormRow>

      <FormRow error={errors?.maxCapacity?.message} label="Maximum capacity">
        <Input
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "This Field Is Requiered",
            min: {
              value: 1,
              message: "The capacity should have atleast 1",
            },
          })}
        />
      </FormRow>

      <FormRow error={errors?.regularPrice?.message} label="Regular price">
        <Input
          type="number"
          id="regularPrice"
          {...register("regularPrice", {
            required: "This Field Is Requiered",
            min: {
              value: 1,
              message: "The capacity should have atleast 1",
            },
          })}
        />
      </FormRow>

      <FormRow error={errors?.discount?.message} label="Discount">
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "This Field Is Requiered",
            min: {
              value: 1,
            },
            validate: (value) =>
              value < getValues().regularPrice ||
              "The disount should be smaller than regularPrice",
          })}
        />
      </FormRow>

      <FormRow error={errors?.description?.message} label="Description">
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          {...register("description", {
            required: "This Field Is Requiered",
          })}
        />
      </FormRow>

      <FormRow label="Cabin photo">
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: "This Field Is Requiered",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>Add cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
