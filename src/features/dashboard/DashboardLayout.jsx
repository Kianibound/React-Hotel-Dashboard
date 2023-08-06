import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";

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
		connfirmedStays,
	} = useRecentStays();

	if (isLoadingRecentBookings || isLoadingSatysStatus) return <Spinner />;

	console.log(bookings);

	return (
		<StyledDashboardLayout>
			<div>Statistics</div>
			<div>Today Activities</div>
			<div>Chart stay duration</div>
			<div>Chart Sales</div>
		</StyledDashboardLayout>
	);
}
