import React from 'react'

export default function Navbar() {
    return (
        <div className='container'>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">NeoSTORE</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-between  " id="navbarNav">
                            
                        <ul class="navbar-nav d-flex align-items-center">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/men">Men</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/women">Women</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled">Disabled</a>
                            </li>


                        </ul>
                        <ul className='navbar-nav' id=''>
                            <li class="nav-item  d-flex " >
                                <a class="nav-link ">
                                    <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' height='30px' width='30px' id='user-image' />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
