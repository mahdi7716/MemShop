import React from 'react'
import Link from 'next/link';
import {BsChevronDown} from 'react-icons/bs'

const data=[
    {id:1 , name:"Home" , url:"/"},
    {id:2 , name:"About" , url:"/about"},
    {id:3 , name:"Categories" , subMenu:true},
    {id:4 , name:"Contact" , url:"/contact"},
];
const subMenuData=[
    {id : 1 , name :"Jordan" , doc_count :11},
    {id : 2 , name :"Sneakers" , doc_count :8},
    {id : 3 , name :"Running Shoes" , doc_count :64},
    {id : 4 , name :"Football Shoes" , doc_count :107},
];

const MenuMobile = ({showCatmenu , setshowCatmenu , setMobileMenu}) => {
  return (
    <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full
     h-[calc(100vh-50px)] bg-white border-t text-black ">

      {data.map((item)=>{
        return (
            // قابلیت React Fragment به ما اجازه میدهد که چندین Element را از درون یک کامپوننت Return کنیم ( برگردانیم ).
            //  ویژگی Fragment تمامی Element های درون خود را بصورت یک گروه در می آورد و آنرا Return میکند
        <React.Fragment key = {item.id}>

   {/* ---------------------------SubMenu Start------------------------------------ */}

   {!! item?.subMenu ?(
                <li className="cursor-pointer py-4 px-5 border-b flex flex-col"
                onClick={()=>setshowCatmenu(!showCatmenu)}
                 >
                  <div className='flex justify-between items-center'>
                  {item.name}
                  <BsChevronDown size={14} />
                  </div>
                   
                   {showCatmenu && (
                    <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                        {subMenuData.map((subMenu)=>{
                            return(
                                <Link key={subMenu.id} href="/" onClick={() => setshowCatmenu (false)}>
                                    <li className=" py-4 px-8 border-t flex justify-between">
                                    {subMenu.name}
                                    <span className="opacity-50 text-sm">
                                        78
                                    </span>
                                    </li>
                                </Link>
                            )
                        })}
                    </ul>
                    //    {/* ---------------------------SubMenu End------------------------------------ */}
                    
                   )}

                </li>
            ):(
                <li className='py-4 px-5 border-b'>
                    <Link href={item?.url}>{item.name} </Link>
                </li>
            )}
        </React.Fragment>
        );
      })}

    </ul>
  )
}

export default MenuMobile