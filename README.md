A responsive and interactive **KYC Dashboard** built with **Next.js 14**, **Tailwind CSS**, and **Chart.js**, featuring dynamic mock API data.  
This dashboard provides a clear view of KYC statistics, visual comparisons, and data breakdowns for better decision-making.

- **Sidebar Navigation**
  - Menu items: Dashboard, Applications, Billing, Rate Card, Agreement Copy, Notices
  - Active menu highlighting
  - Collapsible sidebar for mobile view

- **Top Navbar**
  - Breadcrumb navigation (`Home / Dashboard`)
  - Search bar, Notification icon
  - Profile section with name & date

- **Dashboard Sections**
  - **New KYC & Modified KYC Cards** with percentage change indicators
  - **Bar Chart**: Individual vs Non-Individual comparison for Today & Yesterday
  - **KYC Status Overview**: Initiated, Under Process, Registered, Validated, Hold, Docs Pending
  - **Categories Section**: RI (Resident Indian) & NRI (Non-Resident Indian) completion rate progress bars
  - **Solicited & Unsolicited**: Circular chart showing distribution of PANs
  - **PAN & Data Stats**: With and without image counts for solicitation & reception

- **Functionality**
  - Time range tabs: Today, This Month, Custom (Date Picker)
  - View type toggle: Individual / Non-Individual
  - Fully responsive design
  - Dark mode support
  - Loading skeletons for API data
  - Interactive charts with hover tooltips
   **Tech Stack**
    **Next.js 14** (App Router)
  - **Tailwind CSS** for styling
  - **Chart.js** for visualizations
  - **Heroicons / Lucide** for icons
  - **Mock API** using Next.js API routes or static JSON
