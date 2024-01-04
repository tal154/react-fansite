package learn.fansite.data;

import learn.fansite.models.Forum;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@Repository
public class ForumJdbcTemplateRepository implements ForumRepository{

    private final JdbcTemplate jdbcTemplate;
    public ForumJdbcTemplateRepository(JdbcTemplate jdbcTemplate){this.jdbcTemplate = jdbcTemplate;}
    @Override
    public List<Forum> findAll() {
        final String sql = """
                            select forum_id, forum_name, title, post_content, post_date
                            from forum
                            order by forum_id desc;
                            """;
        return jdbcTemplate.query(sql, new ForumMapper());
    }

    @Override
    public Forum findById(int forumId) {
        final String sql = """
                            select forum_id, forum_name, title, post_content, post_date
                            from forum
                            where forum_id = ?;
                            """;
        return jdbcTemplate.query(sql, new ForumMapper(), forumId).stream()
                .findFirst().orElse(null);
    }

    @Override
    public Forum add(Forum forum) {
        final String sql = """
                            insert into forum (forum_name, title, post_content, post_date)
                            values (?,?,?,?);
                            """;
        KeyHolder keyHolder = new GeneratedKeyHolder();
        int rowAffected = jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, forum.getForumName());
            ps.setString(2, forum.getTitle());
            ps.setString(3, forum.getPostContent());
            ps.setDate(4, Date.valueOf(forum.getPostDate()));
            return ps;
        }, keyHolder);

        if(rowAffected <= 0){
            return null;
        }

        forum.setForumId(keyHolder.getKey().intValue());
        return forum;
    }

    @Override
    public boolean update(Forum forum) {
        final String sql = """
                            update forum set
                            title = ?,
                            post_content = ?
                            where forum_id = ?;
                            """;
        return jdbcTemplate.update(sql,
                forum.getTitle(),
                forum.getPostContent(),
                forum.getForumId()) > 0;
    }

    @Override
    public boolean deleteById(int forumId) {
        return jdbcTemplate.update("delete from forum where forum_id = ?;", forumId) > 0;
    }
}
