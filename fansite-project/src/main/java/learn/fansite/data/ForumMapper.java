package learn.fansite.data;

import learn.fansite.models.Forum;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;

public class ForumMapper implements RowMapper<Forum> {
    @Override
    public Forum mapRow(ResultSet rs, int rowNum) throws SQLException {
        Forum forum = new Forum();
        forum.setForumId(rs.getInt("forum_id"));
        forum.setForumName(rs.getString("forum_name"));
        forum.setTitle(rs.getString("title"));
        forum.setPostContent(rs.getString("post_content"));
        forum.setPostDate(rs.getDate("post_date").toLocalDate());

        return forum;

    }
}
