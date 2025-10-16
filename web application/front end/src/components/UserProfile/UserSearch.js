import React, {useState} from 'react';
import unsplash from '../../api/mysqlLink';
import SearchBar from '../SearchBar';
import ImageList from '../ImageList';
import LogoutButton from '../LogoutButton';
import ProfileButton from '../ProfileButton';
import Filter from '../Filter';
import { variables } from "./../link"
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


class UserSearch extends React.Component {
    // state = { images: [], id: "" }
  
    // // assign the async function to an instance property
    // onSearchSubmit = async (term) => {
    //     const response = await unsplash.get('/search/photos', {
    //         // params same as https://api.unsplash.com/search/query(term)
    //         params: { query: term },
    //     });
  
    //     this.setState({ images: response.data.results })
    // }
    constructor(props) {
      super(props);
  
      this.state = {
        cloths: [],
        Id: "",
        Brand: "",
        Price: 123,
        brandFilter: "",
        clothsWithoutFilter: [],
      };
    }
  
    FilterFn() {
      var brandFilter = this.state.brandFilter;
  
      var filteredData = this.state.clothsWithoutFilter.filter(function (el) {
        return el.Brand.toString()
          .toLowerCase()
          .includes(brandFilter.toString().trim().toLowerCase());
      });
  
      this.setState({ cloths: filteredData });
    }
  
    changeClothBrandFilter = (e) => {
      this.state.brandFilter = e.target.value;
      this.FilterFn();
    };
    refreshList() {
      fetch(variables.HOME_URL + "cloths")
        .then((response) => response.json())
        .then((data) => {
          this.setState({ cloths: data, clothsWithoutFilter: data });
        });
    }
  
    componentDidMount() {
      this.refreshList();
    }
  
    deleteClick(id){
      console.log(id);
      if(window.confirm('Are you sure?')){
      fetch(variables.HOME_URL+'seller/posted/'+id,{
          method:'DELETE',
          headers:{
      
              'Content-Type':'application/json'
          },
      })
      .then(res=>res.json())
      .then((result)=>{
          alert(result);
          this.refreshList();
      },(error)=>{
          alert('Failed');
      })
      }
  }
  
  changePrice = (e)=>{
    this.state.Price=e.target.value;
  }
  
  updateClick(id){
    fetch(variables.HOME_URL+'seller/posted/' +id,{
        method:'PUT',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            cid:this.state.Id,
            price:this.state.Price
        })
    })
    .then(res=>res.json())
    .then((result)=>{
        alert(result);
        this.refreshList();
    },(error)=>{
        alert('Failed');
    })
  }
  
  
  addClick(){
    this.setState({
        modalTitle:"Add Department",
        DepartmentId:0,
        DepartmentName:""
    });
  }
  
  createClick(){
    fetch(variables.HOME_URL+'seller/post',{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            DepartmentName:this.state.DepartmentName
        })
    })
    .then(res=>res.json())
    .then((result)=>{
        alert(result);
        this.refreshList();
    },(error)=>{
        alert('Failed');
    })
  }
    render() {
      const { cloths, brand } = this.state;
  
      return (
        <div>
          <div className="ui secondary  menu">
            <div className="menu">
              <div className="item">
                <div class="two fields">
                  <div className="field">
                    <div className="ui icon input">
                    <InputGroup
                      size="lg"
                      onChange={this.changeClothBrandFilter}
                    >
                      <InputGroup.Text id="inputGroup-sizing-lg">
                        Cloth Brand Search
                      </InputGroup.Text>
                      <Form.Control
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                    </InputGroup>
                    </div>
                  </div>
                  <div className="field">
                    <Filter />
                  </div>
                </div>
              </div>
            </div>
            <div className="right menu">
              <a className="ui item">
                <LogoutButton />
              </a>
              <a className="ui item">
                <ProfileButton />
              </a>
            </div>
          </div>
          {/* <ImageList images={this.state.images} /> */}
          <div>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Cid</th>
                  <th>Brand Name</th>
                  <th>Price</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cloths.map((cloth) => (
                  <tr key={cloth.Cid}>
                    <td>{cloth.cid}</td>
                    <td>{cloth.Brand}</td>
                    <td>{cloth.Price}</td>
                    <td><Button
                      type="button"
                      variant="secondary" size="lg" active
                    //   onClick={() => this.deleteClick(cloth.cid)}
                    >Add to Cart</Button></td>
                    <td>
                    <Button
                      type="button"
                      variant="secondary" size="lg" active
                    //   onClick={() => this.deleteClick(cloth.cid)}
                    >Buy</Button>
                    </td>
                 
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      );
    }
  }
  
  export default UserSearch;
  



