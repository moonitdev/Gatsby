import React, { PureComponent } from 'react';
import { ComposedChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Bar, Line, Area, Scatter, ResponsiveContainer } from 'recharts'

class MixedChart2 extends PureComponent {
    render() {
    return (
        <div style={{ width: '100%', height: 350 }}>
        <ResponsiveContainer>
        <ComposedChart data={this.props.data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            <Scatter dataKey="cnt" fill="red" />
        </ComposedChart>
        </ResponsiveContainer>
        </div>
        );
    }
};

export default MixedChart2;