import React from 'react'
import Classes from './Blog.module.css'
const Blog = () => {
  return (
    <div className={Classes.card}>
    <div>
    <img src="copy-writing.png" alt="logo-blog"/>
    <p>Aikdanai</p>
    <p>Dec 27th, 2022 6 min</p>
    <h2>Solidity Made Easy with Hardhat</h2>
    <p>A walkthrough guide on how to use Hardhat to develop a smart contract with ease!</p>
    <button>#web3</button>
    <button>#hardhat</button>
    <button>#tutorial</button>
    </div>
    <div>
    <img src="copy-writing.png" alt="logo-blog"/>
    <p>Nutchanon</p>
    <p>Dec 27th, 2022 8 min</p>
    <h2>Solving DApps problem with Merkle drop</h2>
    <p></p>When developing your DApp, would transaction fees be quite expensive? What do you decide between scaling, price, and security?
    <button>#web3</button>
    <button>#smart-contract</button>
    </div>
    <div>
    <img src="copy-writing.png" alt="logo-blog"/>
    <p>Aikdanai</p>
    <p>Dec 26th, 2022 5 min</p>
    <h2>Welcome to the world of Web 3.0</h2>
    <p>Web 3.0, dubbed the next state for the internet, is being talked about more and more as the days go by. So what is it exactly?</p>
    <button>#introduction</button>
    <button>#web3</button>
    </div>
    <div>
    <img src="copy-writing.png" alt="logo-blog"/>
    <p>Arken</p>
    <p>Dec 26th, 2022 3 min</p>
    <h2>Introducing The DeFi Review by Arken Finance
</h2>
    <p>DeFi’s innovation cycle is hyper-fast. To find user insight or make critical business decisions, our team relies heavily on data. We compile our little insights into this publication, The DeFi Review.
</p>
    <button>#web3</button>
    <button>#defi-review</button>
    </div>
    </div>
  )
}

export default Blog