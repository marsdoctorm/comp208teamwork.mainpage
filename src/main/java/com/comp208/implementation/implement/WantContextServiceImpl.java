package com.comp208.implementation.implement;

import com.comp208.mappers.WantContextMapper;
import com.comp208.entity.WantContext;
import com.comp208.implementation.WantContextService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by comp208 on 2024.3.1.
 */
@Service
public class WantContextServiceImpl implements WantContextService {
    @Resource
    private WantContextMapper wantContextMapper;

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return 0;
    }

    @Override
    public int insert(WantContext record) {
        return wantContextMapper.insert(record);
    }

    @Override
    public int insertSelective(WantContext record) {
        return wantContextMapper.insertSelective(record);
    }

    @Override
    public WantContext selectByPrimaryKey(Integer id) {
        return wantContextMapper.selectByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKeySelective(WantContext record) {
        return wantContextMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(WantContext record) {
        return wantContextMapper.updateByPrimaryKey(record);
    }

    @Override
    public List<WantContext> selectByUWid(int uwid, int start) {
        return wantContextMapper.selectByUWid(uwid, start);
    }

    @Override
    public int getCounts(int uwid) {
        return wantContextMapper.getCounts(uwid);
    }
}
