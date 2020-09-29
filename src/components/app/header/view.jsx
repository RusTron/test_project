import './style.scss';
import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Col, Row } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { Logo } from '../logo';
import { NavBar } from '../navbar';

const View = () => {
	return (
		<div className={'header'}>
			<Row type={'flex'} gutter={36} align={'middle'}>
				<Col>
					<Logo />
				</Col>
				<Col className={'_flex-grow'}>
					<Row type={'flex'} gutter={16} align={'middle'}>
						<Col className={'_flex-grow'}>
							<NavBar />
						</Col>
						<Col>
              <Link to='/'>
                <Button
                  type={'link'}
                  htmlType={'button'}
                  icon={<LoginOutlined />}
                  // onClick={()=>!visibleAuth}
                >
                  Sign In
                </Button>
              </Link>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export { View };
