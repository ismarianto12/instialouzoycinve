import React, { useEffect, useState } from "react";
import Templates from "../../components/templates";
import axios from "axios";
import Router from "next/router";

export default function Tambah() {
    const [value, setValue] = useState({
        nama_barang: "",
        harga_barang: "",
        stok: "",
        suplier: ""
    });

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.value]: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        



        console.log(value);
        const url = '';

        Router.push('/barang');

        axios.post(url + '/tambahdata', {
        }).then(function (res) {

        }).catch(function (par) {

        });

    }
    useEffect(() => {
        const url = '';

        axios.post(url + '/list', {
        }).then(function (res) {

        }).catch(function (par) {

        });
    }, []);
    return (
        <>
            <Templates content={
                <>

                    <div className="card card-primary card-outline">
                        <form action="" method="post" onSubmit={handleSubmit}>

                            <div className="card-body">

                                <div className="form-group">
                                    <label className="col-md-2">Nama Barang</label>
                                    <div className="col-md-4">
                                        <input type='text' name="nama_barang" onChange={handleChange} value={value.nama_barang} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-2">Harga Barang</label>
                                        <div className="col-md-4">
                                            <input type='text' name="harga_barang" onChange={handleChange} value={value.harga_barang} className="form-control" />
                                        </div>

                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-md-2">Stok</label>
                                    <div className="col-md-4">
                                        <input type='text' name="stok" onChange={handleChange} value={value.stok} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-2">Suplier</label>
                                        <div className="col-md-4">
                                            <input type='text' name="suplier" onChange={handleChange} value={value.suplier} className="form-control" />
                                        </div>

                                    </div>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary" name="submit" type="submit">Simpan data</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </>
            } title={
                'Tambah data barang'
            } />

        </>
    )
}