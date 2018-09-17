/*
 * Author: tiankai
 * Github: https://github.com/tiakia
 * Email: tiankai0426@sina.com
 * Page: Nav
 * Date: 05/15/18 13:08:39
 */

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import getMenuData from 'src/common/menu.js';

export default class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {
        menuData: getMenuData()
    };
      this.renderMenu = this.renderMenu.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.handleData = this.handleData.bind(this);
  }
  componentDidMount(){
      //console.log(getMenuData());
  }
  handleClick(menu){
    let menuData = this.state.menuData;
    let newMenu = this.handleData(menuData, menu);
      /* console.log(newMenu); */
    this.setState({
       menuData: newMenu
    });
  }
  handleData(menuData, menu){
      return menuData.map( val => {
          if(val.path === menu.path){
              val.show = !val.show;
          }else if(val.children){
              this.handleData(val.children, menu);
          }
          return val;
      });
  }
  renderMenu(menuData){
    return (
      <ul>
        {
          menuData.map(menu => {
            if(menu.children){
              return (
                  <li key={menu.path}>
                    <div className = {menu.show ? 'supMenu active' : 'supMenu'} onClick={() => this.handleClick(menu)}>{menu.name}</div>
                    <ul style={ menu.show ? {display: 'block'} : {display: 'none'} }>
                    {
                      menu.children.map(sub => {
                      if(sub.children){
                        return (
                            <li key={sub.path} className="subMenu">
                            <div className= {sub.show ? 'supMenu active' : 'supMenu'}  onClick={()=>this.handleClick(sub)}>{sub.name}</div>
                            <ul style={ sub.show ? {display: 'block'} : {display: 'none'} }>
                            {
                                this.renderMenu(sub.children)
                              }
                              </ul>
                          </li>
                        )
                      }else{
                        return (
                          <li className="subMenu" key={sub.path}>
                          <NavLink
                            to={sub.path}
                            key={sub.path}
                            activeClassName="active"
                            >
                            {sub.name}
                          </NavLink>
                          </li>
                        )
                      }
                    })
                  }
                 </ul>
                </li>
              )
            }else{
              return (
                <li key={menu.path}>
                  <NavLink
                    to={menu.path}
                    key={menu.path}
                    activeClassName="active"
                    isActive={(match, location) => {
                      if(location.pathname === '/' && menu.path === '/home'){
                          return true
                      }else if(menu.path === location.pathname){
                          return true
                      }else{
                          return false
                      }
                    }}
                  >
                    {menu.name}
                  </NavLink>
                </li>
              )
            }
          })
      }
      </ul>
    )
  }
  render(){
    let menuData = this.state.menuData;
    return(
      <nav>
        {
          this.renderMenu(menuData)
        }
      </nav>
    );
  }
}
/* {
 *     menuData && menuData.map(menu => {
 *         return (
 *             <NavLink
 *             to={menu.path}
 *             key={menu.path}
 *             activeClassName="active"
 *             >
 *             {menu.name}
 *             </NavLink>
 *         )
 *     })
 * } */
