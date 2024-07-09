import React from 'react'
import Link from 'next/link';
import {BsChevronDown} from 'react-icons/bs'

const dataMenu=[
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

const Menu = ({showCatmenu , setshowCatmenu}) => {
  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-black">

      {dataMenu.map((item)=>{
        return (
            // قابلیت React Fragment به ما اجازه میدهد که چندین Element را از درون یک کامپوننت Return کنیم ( برگردانیم ).
            //  ویژگی Fragment تمامی Element های درون خود را بصورت یک گروه در می آورد و آنرا Return میکند
        <React.Fragment key = {item.id}>

   {/* ---------------------------SubMenu Start------------------------------------ */}

            {!! item?.subMenu ?(
                <li className="cursor-pointer flex items-center gao-2 relative"
                onMouseEnter={()=>setshowCatmenu(true)}
                onMouseLeave={()=>setshowCatmenu(false)} >
                    


                   {item.name}
                   <BsChevronDown size={14} />
                   {showCatmenu && (
                    <ul className="bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg">
                        {subMenuData.map((subMenu)=>{
                            return(
                                <Link key={subMenu.id} href="/" onClick={() => setshowCatmenu (false)}>
                                    <li className=" h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">
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
                <li className='cursor-pointer'>
                    <Link href={item?.url}>{item.name} </Link>
                </li>
            )}
        </React.Fragment>
        );
      })}

    </ul>
  )
}

export default Menu