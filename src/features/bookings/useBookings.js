import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
	const [searchParams] = useSearchParams();

	// Filter Logic
	const filterValue = searchParams.get("status");
	const filter =
		!filterValue || filterValue === "all"
			? null
			: { field: "status", value: filterValue };

	// Sort Logic

	const soryByRaw = searchParams.get("sortBy") || "totalPrice-desc";
	const [field, direction] = soryByRaw.split("-");
	const sortBy = { field, direction };


  // Pagination Logic

  const page = !searchParams.get("page")
  ? 1
  : Number(searchParams.get("page"));
	const {
		isLoading,
		data: { data: bookings, count } = {},
		error,
	} = useQuery({
		queryKey: ["bookings", filter, sortBy, page],
		queryFn: () => getBookings({ filter, sortBy, page }),
	});

	return { isLoading, bookings, error, count };
}
