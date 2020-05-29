import React, { Component } from 'react'
import { Modal, Form, Input } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

export default class ModalBox extends Component {

  formRef = React.createRef();

  state = { 
    visible: false,
    au: 0,
  }

  componentWillReceiveProps (a) {
    this.setVisible(a.bol, a.au) 
  }

  setVisible = (visible, au = 0) => {
    this.setState({
        visible: visible,
        au,
    })
  }

  handleSubmit = () => {
    this.setVisible(false)
    let userInfo = this.formRef.current.getFieldsValue();
    if(this.state.au){
      this.props.add(userInfo)
    }else{
      this.props.upd({...userInfo, id: this.props.data.id})
    }
    this.formRef.current.resetFields();
  }

  render() {
    const { au } = this.props
    return (
      <Modal
        title={au ? "添加" : "修改"}
        visible={this.state.visible}
        onOk={this.handleSubmit}
        onCancel={this.setVisible.bind(this,false)}
      >
        <Form 
          {...layout} 
          ref={this.formRef}
        >
          <Form.Item 
            name="name" 
            label="姓名" 
            rules={[
              { required: true, message: '姓名必填!' },
            ]}
          >
            <Input placeholder="姓名"  />
          </Form.Item>
          <Form.Item 
            name="age" 
            label="年龄" 
            rules={[
              { required: true, message: '年龄必填!' },
            ]}
          >
            <Input placeholder="年龄"   />
          </Form.Item>
          <Form.Item 
            name="msg" 
            label="地址" 
            rules={[
              { required: true, message: '地址必填!' },
            ]}
          >
            <Input placeholder="地址"   />
          </Form.Item>
        </Form>
      </Modal>
    )
  }
}
