import React, { Component } from 'react'
import { connect } from 'dva'
import { Table, Button, Popconfirm } from 'antd'
import { ModalBox } from '@@'
import './styles.less'

export default @connect(state => ({
  data: state.home.data
}))

class Home extends Component {

  state = {
    bol: false,
    au: 1,
    id: 0,
    datas: {},
  }

  add = () => {
    this.setState({
      bol: true,
      au: 1,
    })
  }

  adds = (data) => {
    this.setState({
      bol: false,
    })
    this.props.dispatch({
      type: 'home/addData',
      payload: {...data}
    })
    this.props.dispatch({
      type: 'home/defaultData',
      payload: '',
    })
  }

  upd = (datas) => {
    this.setState({
      bol: true,
      au: 0,
      datas,
    })
  }

  upds = (data) => {
    this.setState({
      bol: false,
    })
    this.props.dispatch({
      type: 'home/upData',
      payload: data
    })
    this.props.dispatch({
      type: 'home/defaultData',
      payload: '',
    })
  }

  del = (id) => {
    this.props.dispatch({
      type: 'home/delData',
      payload: { id }
    })
  }

  render() {
    const { data } = this.props
    const { datas, bol, au } = this.state
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
      },
      {
        title: '地址',
        dataIndex: 'msg',
      },
      {
        title: '操作',
        render: (data) => (
            <span className="cz">
              <Button type="primary" onClick={this.add} >添加</Button>
              <Button type="primary" onClick={() => this.upd(data)} >编辑</Button>
              <Popconfirm
                title="Are you sure delete this task?"
                onConfirm={() => this.del(data.id)}
                onCancel={() => console.log('Click on No')}
                okText="Yes"
                cancelText="No"
              >
                <Button type="primary" danger>删除</Button>
              </Popconfirm>,
              
            </span>
          )
      },
    ]
    return (
      <div>
        <Table
          rowKey={ v => v.id } 
          columns={columns} 
          dataSource={data} 
          pagination={ false } 
        />
        <ModalBox bol={bol} au={au} add={this.adds} upd={this.upds} data={datas} />
      </div>
    )
  }
}
