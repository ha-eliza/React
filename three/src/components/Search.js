import React from "react";
import "./Search.css";

class Search extends React.Component {
  state = {
    search: "",
    type: "all",
    page: 1,
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.setState({ page: 1 }, () => {
        this.props.searchMovies(this.state.search, this.state.type, 1);
      });
    }
  };

  handlerFilter = (event) => {
    this.setState({ type: event.target.dataset.type }, () =>
      this.props.searchMovies(
        this.state.search,
        this.state.type,
        this.state.page,
      ),
    );
  };

  updatePage = (newPage) => {
    this.setState({ page: newPage }, () => {
      this.props.searchMovies(this.state.search, this.state.type, newPage);
    });
  };

  nextPage = () => {
    let total = Math.ceil(this.props.totalCount / 10);
    if (this.state.page < total) {
      this.updatePage(this.state.page + 1);
    }
  };

  prevPage = () => {
    if (this.state.page > 1) {
      this.updatePage(this.state.page - 1);
    }
  };

  setPage = (num) => {
    this.updatePage(num);
  };

  render() {
    const { search, type, page } = this.state;
    const { totalCount } = this.props;
    let limit = 6;
    let totalPage = Math.ceil(totalCount / limit);

    let end = totalPage <= 6 ? totalPage : page + limit - 1;

    let start =
      totalPage <= 6 ? end - limit + end - 2 : end - limit;

    let num = [];
    for (let i = 1; i <= totalPage; i++) {
      num.push(i);
    }

    return (
      <>
        <div className="search">
          <input
            type="search"
            placeholder="search"
            value={search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
        </div>
        <div className="radio">
          <input
            type="radio"
            name="type"
            id="all"
            data-type="all"
            checked={type === "all"}
            onChange={this.handlerFilter}
          />
          <label htmlFor="all">All</label>
          <input
            type="radio"
            name="type"
            id="movies"
            data-type="movie"
            checked={type === "movie"}
            onChange={this.handlerFilter}
          />
          <label htmlFor="movies">Movies</label>
          <input
            type="radio"
            name="type"
            id="series"
            data-type="series"
            checked={type === "series"}
            onChange={this.handlerFilter}
          />
          <label htmlFor="series">Series</label>
          <input
            type="radio"
            name="type"
            id="games"
            data-type="game"
            checked={type === "game"}
            onChange={this.handlerFilter}
          />{" "}
          <label htmlFor="games">Games</label>
        </div>
        <div className="navigation">
          <button
            style={{ opacity: page === 1 ? ".5" : "1" }}
            disabled={page === 1}
            className="btn"
            onClick={this.prevPage}
          >
            Prev
          </button>

          <div className="items">
            {num.slice(start, end).map((el) => (
              <button
                className="btn"
                key={el}
                style={{ background: page === el ? "gray" : "" }}
                onClick={() => this.setPage(el)}
              >
                {el}
              </button>
            ))}
          </div>

          <button
            style={{ opacity: page === totalPage ? ".5" : "1" }}
            disabled={page === totalPage}
            className="btn"
            onClick={this.nextPage}
          >
            Next
          </button>
        </div>
      </>
    );
  }
}

export default Search;
