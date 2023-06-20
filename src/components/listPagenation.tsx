const ListPagination = ({
  limit,
  page,
  setPage,
  blockNum,
  setBlockNum,
  counts,
}: {
  limit: number;
  page: number;
  setPage: Function;
  blockNum: number;
  setBlockNum: Function;
  counts: number;
}): any => {
  const createArr = (n: number) => {
    console.log('n', n, limit, counts)
    const iArr: number[] = new Array(n);
    for (let i = 0; i < n; i++) iArr[i] = i + 1;
    return iArr;
  };

  
  const pageLimit = 8; // 보여줄 페이지네이션 개수

  const totalPage: number = Math.ceil(counts / limit); // 전체 / 갯수 => 3개 페이지
  console.log( limit, counts, totalPage);
  const nArr = createArr(Number(totalPage)); // nArr 함수에 전체 페이지의 개수를 배열로 담는다.
  console.log(nArr, 'nArr');

  const firstPage = () => {
    setPage(1);
    setBlockNum(0);
  };

  const lastPage = () => {
    setPage(totalPage);
    setBlockNum(Math.ceil(totalPage / pageLimit) - 1);
  };

  const prevPage = () => {
    if (page <= 1) {
      return;
    } // page가 1보다 작거나 같으면 아무 것도 리턴하지 않는다.
    if (page - 1 <= pageLimit * blockNum) {
      setBlockNum((n: number) => n - 1);
    } // 현재 페이지 - 1 이 보여줄 페이지네이션 개수(pageLimit) * blockNum 보다 작거나 같으면 setBlockNum에 - 1 을 작동시킨다.
    setPage((n: number) => n - 1); // setPage를 현재 페이지에서 -1 로 이동시킨다.
  };

  const nextPage = () => {
    if (page >= totalPage) {
      return;
    } // page가 마지막 페이지보다 크거나 같으면 아무 것도 리턴하지 않는다.
    if (pageLimit * Number(blockNum + 1) < Number(page + 1)) {
      setBlockNum((n: number) => n + 1);
    } //보여줄 페이지네이션 개수(pageLimit) * (blockNum+1) 가 page + 1보다 작다면 setBlockNum은 현재 페이지 + 1을 한다.
    setPage((n: number) => n + 1); //setPage에 현재 페이지 + 1을 한다.
  };

  return (
    <div className="flex gap-4 justify-center ">
      <button
        onClick={() => {
          firstPage();
        }}
      >&lt;&lt;</button>
      <button
        className="moveToPreviousPage"
        onClick={() => {
          prevPage();
        }}
        disabled={page === 1}
      >&lt;</button>

      <div>
        {nArr.map((n: number) => (
          <button
            className="hover:bg-[#7BB4C3] px-2 rounded-full font-sans"
            style={{backgroundColor: page === n ? '#eee': ''}}
            key={n}
            onClick={() => {
              setPage(n);
            }}
          >
            {n}
          </button>
        ))}
      </div>
      <button
        onClick={() => {
          nextPage();
        }}
        disabled={page === totalPage}
      >
        &gt;
      </button>
      <button
        onClick={() => {
          lastPage();
        }}
      >&gt;&gt;
      </button>
    </div>
  );
};

export default ListPagination;