import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";
import DatePicker from "../components/form/date-picker";
import Button from "../components/ui/button/Button";

export default function Predictions() {
  return (
    <div>
      <PageMeta
        title="React.js Blank Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Blank Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      {/* <PageBreadcrumb pageTitle="Predictions" /> */}
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-gray-900 xl:px-10 xl:py-12">
        <div className="mx-auto w-full max-w-[630px] text-center">
          <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
            Forecast Future Bookings and Revenue
          </h3>

          {/* <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-base">
            Start putting content on grids or panels, you can also use different
            combinations of grids.Please check out the dashboard and other pages
          </p> */}
          <p className="dark:text-white">
            This will helps you forecast daily room bookings and expected
            revenue for the next 30 days, starting from a selected date. Use the
            date picker below to select a future date and click "Predict" to
            view visualized trends, revenue charts, and booking tables.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <DatePicker
              id="date-picker"
              // label="Date Picker Input"
              placeholder="Select a date"
              onChange={(dates, currentDateString) => {
                // Handle your logic
                console.log({ dates, currentDateString });
              }}
            />
            <Button>Predict</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
