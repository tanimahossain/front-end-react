import React from 'react';
import '../App.css';
import '../styles/Pagination.css';
import PerPage from './PerPage';
function Pagination(props) {
    let currentPage = 1;
    let endPage = props.mx;
    let startPage = 1;
    if (props.currentPage) {
        currentPage = props.currentPage;
    }
    if (props.totPage) {
        endPage = props.totPage;
    }
    if (currentPage + 2 < endPage && currentPage > 3) {
        endPage = currentPage + 2;
    }
    if (props.startPage) {
        startPage = props.startPage;
    }
    if (endPage - 4 > startPage) {
        startPage = currentPage + 2;
    }
    const pageNumbers = ['Prev'];
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }
    pageNumbers.push('Next');
    console.log(currentPage);
    const ViewList = pageNumbers.map((pageNo, i) => (
        <PerPage
            key={i}
            currentPage={currentPage}
            endPage={endPage}
            startPage={startPage}
            pageNo={pageNo}
            Paginate={props.Paginate}
            mx={props.mx}
        />
    ));
    return (
        <div className="pagination">
            <div className="wrapPages">{ViewList}</div>
        </div>
    );
}
export default Pagination;
