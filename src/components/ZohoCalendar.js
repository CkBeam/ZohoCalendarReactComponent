import './ZohoCalendar.css';

function ZohoCalendar() {
    return (
        <>
            <div>
                <iframe
                    src='https://crm.zoho.com/bookings/SalesPathScheduledCallbacks?rid=37c447e2323b14caa7dab5b21364a4596ffab17a9abf1c6b76cd2c98747281c7gid3e6dacab37550151e8c3000a548afdf3f3d0e90c80e42ba9f5d64a1394da5e77&option=embed'
                    id='iframe'
                    style={{ color: 'red' }}
                    title='zoho Calendar'
                />
            </div>
        </>
    );
}

export default ZohoCalendar;
