import Templates from "../../components/templates";
import DataTable from "react-data-table-component";
// import { Button } from "bootstrap";
// import faker from 'faker';
// import LI
import Link from 'next/link';



export default function Barang() {

    const data = [
        {
            id: 1,
            name: 'Beetlejuice',
            email: '1988',
            address: 'Beetlejuiceaqwe',

        },
        {
            id: 2,
            name: 'Beetlejuice',
            email: '1988',
            address: 'Beetlejuiceaqwe',

        },
        {
            id: 2,
            name: 'Beetlejuice',
            email: '1988',
            address: 'Beetlejuiceaqwe',

        },
        {
            id: 2,
            name: 'Beetlejuice',
            email: '1988',
            address: 'Beetlejuiceaqwe',

        },

    ]

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
        },
        {
            name: 'Address',
            selector: row => row.address,
            sortable: true,
        },

    ];
    return (
        <>

            <Templates content={<>
                <Link href="barang/tambah/">
                    <a href="" className="btn btn-primary">
                        Tambah
                    </a>
                </Link>
                <br />  <br />  <br />

                <DataTable
                    columns={columns}
                    data={data}
                    selectableRows
                    persistTableHead
                />

            </>} title={"Master data Barang"}></Templates>
        </>
    )

}