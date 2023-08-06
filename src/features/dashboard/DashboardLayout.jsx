import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";
import { useCabins } from "../cabins/useCabins";
import Stats from "./Stats";

const StyledDashboardLayout = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: auto 34rem auto;
	gap: 2.4rem;
`;

export default function DashboardLayout() {
	const { isLoading: isLoadingRecentBookings, bookings } = useRecentBookings();

	const {
		isLoading: isLoadingSatysStatus,
		stays,
		confirmedStays,
		numDays,
	} = useRecentStays();

	const { isLoading: isLoadingCabins, cabins } = useCabins();

	if (isLoadingRecentBookings || isLoadingSatysStatus || isLoadingCabins)
		return <Spinner />;

	return (
		<StyledDashboardLayout>
			<Stats
				bookings={bookings}
				confirmedStays={confirmedStays}
				numDays={numDays}
        cabinCount={cabins.length}
			/>
			<div>Today Activities</div>
			<div>Chart stay duration</div>
			<div>Chart Sales</div>
		</StyledDashboardLayout>
	);
}
